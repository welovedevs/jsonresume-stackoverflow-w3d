const getLevel = (value) => {
  if (value >= 90) {
    return 'master'
  }
  if (value >= 70) {
    return 'advanced'
  }
  if (value >= 40) {
    return 'intermediate'
  }
  return 'beginner'
};

module.exports = {getLevel};
