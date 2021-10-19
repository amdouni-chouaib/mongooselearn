const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/peopleDB" , {
            useNewUrlParser : true , 
            useUnifiedTopology : true ,
        })
        console.log("DATA BASE CONNECTED ")
    } catch (err) {
        console.log("DATA BASE ERROR" , err)
        process.exit(1)
    }
}
module.exports = connectDB