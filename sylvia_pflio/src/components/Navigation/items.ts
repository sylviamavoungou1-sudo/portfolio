
export const items = ['accueil', 'à propos', 'projets', 'contact'];

export type Item = (typeof items)[number];

// Items that link to anchor sections on the main page
// vs items that link to separate HTML pages
export const links: Record<string, string> = {
  'accueil': '/#home',
  'à propos': '/about.html',
  'projets': '/projects.html',
  'contact': '/contact.html',
};