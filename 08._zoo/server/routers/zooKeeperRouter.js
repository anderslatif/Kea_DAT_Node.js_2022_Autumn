import { Router } from "express";
const router = Router();

router.get("/api/zookeeper/entrance", (req, res) => {
    req.session.isLoggedIn = true;    
    res.send({ message: "Welcome" });
});

router.get("/api/zookeeper/secretroom", (req, res) => {
    console.log(req.session);
    if (!req.session.isLoggedIn) {
        res.status(403).send({ message: "You don't work here" });
    } else {
        res.send({ message: "Hey there ol' chap" });
    }
});

router.get("/api/zookeeper/exit", (req, res) => {
    delete req.session.isLoggedIn;
    res.send({ message: "Bye..." });
});

export default router;
