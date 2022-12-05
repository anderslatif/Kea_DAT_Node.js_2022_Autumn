import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(`A socket connected on id ${socket.id}`);


    io.on("disconnect", () => {
        console.log(`Socket ${socket.id} left.`);
    });
});


server.listen(8080, () => console.log(`Server is running on port`, 8080));