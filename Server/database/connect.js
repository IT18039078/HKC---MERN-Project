const mongoose = require("mongoose");

const connect = async() =>{
    try {
        const con = mongoose.connect(process.env.MONGOOSE_URI,{
            useNewUrlParser: true,
            useUnifiedToplogy: true,
            useFindAndModify: false,
            useCrateIndex: true
        });
        console.log("MONGODB CONNECTED")
    } catch (error) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect;