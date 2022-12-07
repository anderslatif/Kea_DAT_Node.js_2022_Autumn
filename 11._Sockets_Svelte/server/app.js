import express from "express";
import http from "http";
import { Server } from "socket.io";
import "dotenv/config";

const app = express();
const server = http.createServer(app);
const io = new Server(server,  {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
});

import path from "path";
app.use(express.static(path.resolve("../client/dist")));

app.use(express.json());
import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
});
app.use(sessionMiddleware);
import registrationRouter from "./routers/registrationRouter.js";
app.use(registrationRouter);

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));


io.on("connection", (socket) => {
    socket.on("client choose a new color", (data) => {
        data.username = socket.request.session.username;
        io.emit("update the color", data);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));
