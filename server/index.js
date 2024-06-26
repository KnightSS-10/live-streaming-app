import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import mongoose from "mongoose";

import users from "./src/models/users.js";
import Message from "./src/models/Message.js";
import Channel from "./src/models/Channel.js";

import authRoutes from "./src/routes/authRoutes.js";
import channelsRoutes from "./src/routes/channelsRoutes.js"
import settingsRoutes from "./src/routes/settingsRoutes.js"
import { registerSocketServer } from "./src/io/io.js";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());

app.use(cors());

const server = http.createServer(app);

registerSocketServer(server);

app.get("/", (req,res) =>{
    return res.send("Server Online");
});
 
app.use("/api/auth", authRoutes);
app.use("/api/channels", channelsRoutes);
app.use("/api/settings", settingsRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        server.listen(PORT, (req,res)=>{
            console.log(`server is listening ${PORT}`);
        })
    })
    .catch(err =>{
        console.log('could not connect to server');
        console.log(err);
    });