import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());

app.use(cors());

const server = http.createServer(app);

app.get("/", (req,res) =>{
    return res.send("Server Online");
});

server.listen(PORT, (req,res)=>{
    console.log(`server is listening ${PORT}`);
})