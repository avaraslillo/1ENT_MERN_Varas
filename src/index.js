import express from 'express';
import cartRouter from './routes/cart.route.js';
import productRouter from './routes/product.route.js';

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.get('/', (req, res) => {
    res.send('Hello World, now from Express!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});