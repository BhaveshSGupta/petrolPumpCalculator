const mongoose = require("mongoose")

const connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}

const disconnect = () => {
    mongoose.disconnect()
}

module.exports = {
    connect,
    disconnect
}