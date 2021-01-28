const mongoose = require('mongoose');
const config = require('./config');

const uri = `mongodb://${config.user}:${config.password}@${config.url}`;
const clientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'apinode'
};

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect(uri, clientOptions)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}