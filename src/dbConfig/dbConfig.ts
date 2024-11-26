import mongoose from "mongoose"

export async function connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection

        connection.on('Connected', () => {
            console.log("MongoDB Let's Go");
        })
        connection.on('error', (err) => {
            console.log("MongoDB Connection error, Please make sure it is running", + err);
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong in connecting DB")
        console.log(error);
    }
}