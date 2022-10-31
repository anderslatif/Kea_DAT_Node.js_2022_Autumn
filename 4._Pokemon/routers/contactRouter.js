import { Router } from "express";
const router = Router();

router.post("/api/contact", (req, res) => {
    res.send(req.body);
});

export default router;