const W3DWordsInFrench = {
  fixedTerm: 'CDD',
  permanent: 'CDI',
  internship: 'Stage',
  apprenticeship: 'Apprentissage',
  freelance: 'freelance',
  always: 'Télétravail temps complet',
  fullTime: 'Télétravail temps complet',
  regularly: 'Télétravail régulier',
  occasionally: 'Télétravail occasionnel',
  never: 'Pas de télétravail',
  mood: 'Une bonne ambiance',
  challenge: 'du challenge',
  salary: 'le salaire',
  work_hours: 'des horaires flexibles',
  training: 'des formations',
  responsabilities: 'des responsabilités',
  perks: 'des avantages (tickets restau, CE...)',
  other: 'autres'
};

const getW3DWord = (word) => {
  return W3DWordsInFrench[word];
};

module.exports = {getW3DWord};
