import express from 'express';
import productsRouter from './routes/product.route.js';
import cors from 'cors';

const app = express();
app.use(express.json());
//permite que acesse mesmo que a page estava em outro servidor
app.use(cors());
app.use('/product',productsRouter);


// app.use((err, req, res, next) => {
//     res.error(`${req.method} ${req.baseUrl} - ${err.message}`);
//     res.status(400).send({ error: err.message });
// })

const port = 3005;

app.listen(port, function(){
    console.log(`listen at port ${port}`)
})