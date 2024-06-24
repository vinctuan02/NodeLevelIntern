import express from 'express';
import bodyParser from 'body-parser';
import { testConnectDB } from './config/Database.js';
import initWebRouter from './routes/index.js';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(cors());
initWebRouter(app);

testConnectDB();

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
