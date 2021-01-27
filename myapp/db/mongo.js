const mongoose = require('mongoose');

const uri = `mongodb://api:docker1234@localhost:27017`;
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