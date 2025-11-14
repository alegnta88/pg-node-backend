import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan'; 
import helmet from 'helmet';
import pool from './config/db.js';

dotenv.config();

const app = express();

app.use(helmet());           
app.use(cors());         
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); 

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;