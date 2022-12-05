import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server,  {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
});

io.on("connection", (socket) => {
    socket.on("client choose a new color", (data) => {
        io.emit("update the color", data);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));
