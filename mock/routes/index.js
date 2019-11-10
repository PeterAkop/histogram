const pets = require('./pets');

module.exports = async (app) => {
    app.use('/pets', pets);
};
