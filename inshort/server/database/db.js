import mongoose from "mongoose";



const Connection = async (password) =>{
    const URL = `mongodb://ritesh:${password}@ac-7aip1xw-shard-00-00.nf1neer.mongodb.net:27017,ac-7aip1xw-shard-00-01.nf1neer.mongodb.net:27017,ac-7aip1xw-shard-00-02.nf1neer.mongodb.net:27017/?ssl=true&replicaSet=atlas-ia09w8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    try {
       const response = await mongoose.connect(URL);
       console.log('Database connected successfully');
    } catch (error) {
        console.log("Error while connecting with the database",error);
    }
}

export default Connection;