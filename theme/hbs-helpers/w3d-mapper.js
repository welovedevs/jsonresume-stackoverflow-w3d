const W3DWordsInFrench = {
  fixedTerm: 'CDD',
  permanent: 'CDI',
  internship: 'Stage',
  apprenticeship: 'Apprentissage',
  freelance: 'freelance',
  always: 'Télétravail temps complet',
  fullTime: 'Télétravail temps complet',
  hybrid: 'Télétravail partiel',
  no: 'Pas de télétravail',

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
const getRemoteDays = (node) => {

  const remoteDays = node.remoteFrequency.daysPerWeek;
  if (remoteDays === 1) {
    return '1 jour par semaine'
  }
  return String(remoteDays) + ` jours par semaine`
};

module.exports = {
  getW3DWord,
  getRemoteDays
};
