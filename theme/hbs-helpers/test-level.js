const getTestLevel = (value) => {
    if (value <= 10) {
        return 'master';
    }
    if (value <= 40) {
        return 'advanced';
    }
    if (value <= 70) {
        return 'intermediate';
    }
    return 'beginner';
};

module.exports = {getTestLevel};
