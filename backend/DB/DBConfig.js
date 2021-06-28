import mongoose from 'mongoose'

const mongooseDB = async ()=>{

    try {
        await mongoose.connect(process.env.DB_URL,{
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useNewUrlParser:true
        });
        console.log("Database Connection is Successfully Done");
    } catch (error) {
        console.log("Something is wrong into Database Connections! ");
        process.exit(1);
    }

}

export default mongooseDB
