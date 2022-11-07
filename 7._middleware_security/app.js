import express from "express";
const app = express();

import helmet from "helmet";
app.use(helmet());

import rateLimit from "express-rate-limit";

const generalLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 80
});
app.use(generalLimiter);

const frontdoorLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 6 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/frontdoor", frontdoorLimiter);


/* Middleware functions */
function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

function guidingButler(req, res, next) {
    console.log("This way, sir.");
    next();
}

/* Setup middleware */
// app.use(ipLogger);
app.use("/room", guidingButler);


function guardMiddleware(req, res, next) {
    if (req.query.name !== "Anders") {
        res.send({ message: "You are not Anders! Go away." });
    }

    req.fullname = "Anders Latif";
    next();
}

app.get("/frontdoor", guardMiddleware, (req, res) => {
    res.send({ message: `Please enter, ${req.fullname}` });
});


app.get("/room", (req, res, next) => {
    console.log("Room 1");
    next();
    // res.send({ message: "You are in room 1" });
});

app.get("/room", (req, res, next) => {
    console.log("Room 2");
    res.send({ message: "You are in room 2" });
});

app.get("/inlinemiddleware", (req, res, next) => next(), (req, res, next) => res.send({ "message": "OK" }));

app.get("*", (req, res) => {
    res.send(`<h1>404</h1><br><h3>Could not find the page.</h3>`);
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
