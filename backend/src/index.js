import express from "express";
import { PORT } from "./config/serverConfig.js";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.get('/ping',(req,res)=>{
    console.log("Pinged succesfully");
    return res.json({message:"pinged ok"});
})
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
