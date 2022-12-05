import { Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js";


router.get("/animalfeedtypes", async (req, res) => {
    const [rows, fields] = await db.query("SELECT * FROM animal_feed_types;");
    
    res.send({ data: rows });
});


export default router;
