
export const items = ['accueil', 'à propos', 'parcours', 'projets', 'contact'];

export type Item = (typeof items)[number];

// Items that link to anchor sections on the main page
// vs items that link to separate HTML pages
export const links: Record<string, string> = {
  'accueil': '/#home',
  'à propos': '/about.html',
  'projets': '/projects.html',
  'parcours': '/parcours.html',
  'contact': '/contact.html',
};