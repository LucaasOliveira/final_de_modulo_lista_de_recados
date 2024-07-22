import express from 'express';
import cors from 'cors';

import mainRoute from './routes/mainRoute.js';
import { userRoutes } from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use('/', mainRoute);
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
