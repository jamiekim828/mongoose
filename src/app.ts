// create server here
import Express from 'express';

import productRouter from './routes/products';
import userRouter from './routes/user';
import orderRouter from './routes/order';

const app = Express();
app.use(Express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/order', orderRouter);

export default app;
