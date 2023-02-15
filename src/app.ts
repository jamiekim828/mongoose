// create server here
import Express from 'express';

import productRouter from './routes/products';
import userRouter from './routes/user'

const app = Express();
app.use(Express.json());

app.use('/products', productRouter);
app.use('/users', userRouter)

export default app;
