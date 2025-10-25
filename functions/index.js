const functions = require('firebase-functions');
const admin = require('firebase-admin');
const geoip = require('geoip-lite');
const cors = require('cors')({ origin: true });

admin.initializeApp();
const db = admin.firestore();
const enableMasking = false;

// Helper to mask IPv4 addresses for privacy (zero last octet)
// ex: 192.168.1.123 -> 192.168.1.0
// and IPv6 (zero last 2 groups)
// ex: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 -> 2001:0db8:85a3:0000:0000:8a2e::
function maskIp(ip) {
  if (!enableMasking) return ip;

  if (!ip) return null;
  // x-forwarded-for may contain a list
  if (ip.includes(',')) ip = ip.split(',')[0].trim();
  // IPv4
  const v4 = ip.match(/^(\d+\.\d+\.\d+\.\d+)$/);
  if (v4) {
    const parts = ip.split('.');
    parts[3] = '0';
    return parts.join('.');
  }
  // IPv6 - truncate last 2 groups
  const v6 = ip.includes(':');
  if (v6) {
    const parts = ip.split(':');
    if (parts.length > 2) {
      parts[parts.length - 1] = '';
      parts[parts.length - 2] = '';
    }
    return parts.join(':');
  }
  return null;
}

exports.logVisit = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      // Accept only POST for logging (allow GET for simple probe)
      if (req.method !== 'POST') {
        return res.status(200).json({ ok: true, message: 'logVisit expects POST' });
      }

      const now = admin.firestore.FieldValue.serverTimestamp();

      // Get client IP from x-forwarded-for or connection
      const xff = req.headers['x-forwarded-for'] || req.headers['x-appengine-user-ip'];
      const remote = req.connection && req.connection.remoteAddress;
      const rawIp = (xff || remote || '').toString();
      const ip = maskIp(rawIp);

      const geo = geoip.lookup(rawIp) || {};

      const body = req.body || {};

      const doc = {
        // For privacy we store masked IP and geo info. Do NOT store full raw IP unless you understand privacy laws.
        ip_masked: ip || null,
        country: geo.country || null,
        region: geo.region || null,
        city: geo.city || null,
        userAgent: req.get('user-agent') || body.userAgent || null,
        language: req.get('accept-language') || body.language || null,
        screen: body.screen || null,
        timezone: body.timezone || null,
        path: body.path || req.path || '/',
        referrer: body.referrer || req.get('referer') || null,
        // Optional geolocation from browser (requires user permission)
        geo_from_client: body.geo || null,
        createdAt: now,
      };

      await db.collection('visits').add(doc);

      return res.status(201).json({ ok: true });
    } catch (err) {
      console.error('logVisit error', err);
      return res.status(500).json({ ok: false, error: err.message });
    }
  });
});
