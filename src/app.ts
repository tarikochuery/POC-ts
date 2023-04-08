import express, { json } from 'express';
import { routes } from './routes/index.ts';

const app = express();
app.use(json());
app.use(routes);

app.listen(5000, () => { console.log('Servidor rodando'); });