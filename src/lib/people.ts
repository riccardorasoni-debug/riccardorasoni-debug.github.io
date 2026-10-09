export const PEOPLE: Record<string, string> = {
  'Olivier Coibion': 'https://sites.google.com/site/ocoibion/',
  'Efrem Castelnuovo': 'https://sites.google.com/site/efremcastelnuovo/home',
  'Alessia Russo': 'https://alessiarussoecon.weebly.com/',
  'Jessica Piccolo': 'https://sites.google.com/view/jessicapiccolo',
  'Filippo Da Re': 'https://sites.google.com/view/filippodare/',
  'Stefano Castaldo': 'https://scholar.google.com/citations?user=hAxzQPkAAAAJ&hl=it',
  'Alessandro Nava': 'https://sites.google.com/view/alessandronava/',
  'Alessandro Calzolaio': 'https://webapps.unitn.it/du/en/Persona/PER0295943/Didattica',
  'Francesco Lancia': 'https://sites.google.com/site/fralanecon/home',
};

export const personUrl = (name: string) => PEOPLE[name];
