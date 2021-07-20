import Router from "express";
import getAll from "../controllers/servers.js";

var router = Router();

router.get('/api/server', getAll);

export default router;