import express,{Application,Request,Response} from "express";
import router from "../router/bookStoreRouter";


const PORT :number|string  = process.env.port||4044;

const app :Application = express();
require("../config/db");


app.use(express.json());

app.get("/",(req:Request,res:Response):Response=>{
   return res.status(200).json({
    message:"BookStore Server is Up"
   })
})

app.use("/server", router);

app.listen(PORT,()=>{
console.log(`BookStore server is up and running on PORT:${PORT}`);

})