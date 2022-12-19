import mongoose from "mongoose"

const URI:string = "mongoose://localhost/BookStore";

const lifeURI :string =       "mongodb+srv://ValerianPedro:atlas-329-databse@cluster0.ngujblg.mongodb.net/bookStore?retryWrites=true&w=majority";


mongoose.connect(lifeURI);
mongoose.connection.on("open",()=>{
    console.log("BookStore DataBase Connected");
    
}).once("error",(error)=>{
    console.log(`Failed to connect to BookStore dataBase\n ${error}`);
    
})