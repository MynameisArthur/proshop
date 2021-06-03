const express = require('express');
const app = express();
const products = require('./data/products');
// Home route
app.get('/', (req, res) => {
    res.send('API is running...');
});
// All products route
app.get('/api/products', (req, res) => {
    res.json(products);
});
// Single product route
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(5000, console.log('Server running on port 5000'));
