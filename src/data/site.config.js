// Site-wide configuration to drive navigation and optional settings
const siteConfig = {
  // Order and visibility of sections
  sections: [
    { id: 'about', label: 'About', enabled: true },
    { id: 'what-i-do', label: 'What I do', enabled: true },
    { id: 'proficiency', label: 'Proficiency', enabled: true },
    { id: 'projects', label: 'Projects', enabled: true },
    { id: 'experience', label: 'Experience', enabled: true },
    { id: 'education', label: 'Education', enabled: true },
    { id: 'contact', label: 'Contact', enabled: true },
  ],
  // Analytics / tracking settings. Disabled by default. Change to `enabled: true`
  // only after you have reviewed privacy and legal requirements and added the
  // server-side Cloud Function and Firestore (this repo includes scaffolding).
  analytics: {
    enabled: true,
    // the client posts to '/logVisit' which is rewritten to the Cloud Function.
    endpoint: '/logVisit',
  },
}

export default siteConfig
