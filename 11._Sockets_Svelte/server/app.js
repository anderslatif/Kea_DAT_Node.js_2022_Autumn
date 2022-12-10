import express from "express";
import http from "http";
import { Server } from "socket.io";
import "dotenv/config";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

import path from "path";
import chokidar from "chokidar";

const distFolderPath = path.resolve("../client/dist/");

if (process.env.NODE_ENV === "DEVELOPMENT") {
    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy',"default-src 'self' 'unsafe-inline' http://localhost:8080");
        next();
    });
    app.use(express.static(distFolderPath));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(distFolderPath, "index.html"));
    });
}

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

if (process.env.NODE_ENV === "DEVELOPMENT") {
    chokidar.watch(distFolderPath,
        {
            awaitWriteFinish: {
                stabilityThreshold: 2000
            }
        })
    .on("change", () => io.emit("update the page"));
}

io.on("connection", (socket) => {
    socket.on("client choose a new color", (data) => {
        data.username = socket.request.session.username;
        io.emit("update the color", data);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));
