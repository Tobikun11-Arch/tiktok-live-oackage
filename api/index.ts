import dotenv from 'dotenv';
import cors from 'cors';
import express, { Request, Response } from 'express'
import UserRoutes from '../routes/userRoutes';

const app = express()
const port = 5000

dotenv.config();
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
};
app.use(cors(corsOptions));

app.use('/api', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/users/data', (req: Request, res: Response) => {
    const user = 'user'

    return res.json({ user })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})