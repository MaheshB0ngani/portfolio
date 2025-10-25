import siteConfig from '../data/site.config'

async function postVisit(payload) {
  try {
    await fetch('/logVisit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      mode: 'cors',
    })
  } catch (err) {
    // Don't let tracking errors break the app
    // console.debug('trackVisit error', err)
  }
}

export async function trackVisit() {
  if (!siteConfig.analytics || !siteConfig.analytics.enabled) return

  const payload = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    screen: { w: window.screen?.width, h: window.screen?.height },
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    path: window.location.pathname + window.location.search,
    referrer: document.referrer || null,
  }

  // Try to get browser geolocation only if available; this requires user consent.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        payload.geo = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        }
        void postVisit(payload)
      },
      () => {
        // user denied or error
        void postVisit(payload)
      },
      { maximumAge: 60 * 1000, timeout: 3000 }
    )
  } else {
    void postVisit(payload)
  }
}

export default trackVisit
