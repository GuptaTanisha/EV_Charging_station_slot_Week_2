import {contact} from '../controllers/stations.js';
import express from 'express';

const router = express.Router();
router.post("/contact", contact);

export default router;