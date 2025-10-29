import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import itemsRouter from './routes/items.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/items', itemsRouter);

export default app;




