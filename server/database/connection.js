const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const dbUrl = "mongodb+srv://admin:OughOauMLxW83ty8@knowhowcluster.qvycb6g.mongodb.net/users?retryWrites=true&w=majority";

const connectDB = async()=>{
    try{
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        const con = mongoose.connect(dbUrl,connectionParams);
        console.log('MongoDB connected!!');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;