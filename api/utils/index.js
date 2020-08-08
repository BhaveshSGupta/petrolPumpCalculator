const mongoose = require("mongoose")

const connect = (from) => {
    !!from && process.env.NODE_ENV === "development" && console.log(`connected from ${from}`)
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}

const disconnect = (from) => {
    !!from && process.env.NODE_ENV === "development" && console.log(`disconnected from ${from}`)
    mongoose.disconnect()
}

module.exports = {
    connect,
    disconnect
}