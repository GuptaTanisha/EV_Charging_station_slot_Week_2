import express from 'express';
import bodyParser from 'body-parser';
import stationsRoutes from './routes/stations.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use('/stations',stationsRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server started at ${PORT}`));