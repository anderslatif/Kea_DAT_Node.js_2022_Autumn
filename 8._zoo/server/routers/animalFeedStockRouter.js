import { Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js";

router.get("/animalfeedstock", async (req, res) => {
    const [rows, fields] = await db.query("SELECT * FROM animal_feed_stock;");
    
    res.send({ data: rows });
});

router.post("/animalfeedstock/:stockTypeId", (req, res) => {
    // task write pseudo-code or comments and reflect on what steps you need to do here
    res.send({});
});

export default router;