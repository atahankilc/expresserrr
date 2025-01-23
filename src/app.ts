import express from 'express';
import userRoutes from './routes/userRoutes';
import exerciseRoutes from './routes/exerciseRoutes';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/exercises', exerciseRoutes);

export default app;
