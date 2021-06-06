const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();
const app = express();
const productRoutes = require('./routes/productRoutes');

// Home route
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);
