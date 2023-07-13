import express from 'express';
import cors from 'cors';
import Routing from './Routing.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(Routing)

app.listen(5000, () => { console.log(`Running on port: 5000`) })