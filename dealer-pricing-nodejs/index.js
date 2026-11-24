const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Datos estáticos para distribuidores y precios
const dealers = {
    1: [{ id: 101, name: 'Tech Distributors Inc.' }, { id: 102, name: 'Global Electronics' }],
    2: [{ id: 103, name: 'Mobile World' }],
    3: [{ id: 104, name: 'AudioPhile Supplies' }, { id: 105, name: 'Gadget Hub' }]
};

const prices = {
    1: { 101: 1200, 102: 1150 },
    2: { 103: 800 },
    3: { 104: 150, 105: 140 }
};

// Endpoint para obtener los distribuidores de un producto
app.get('/dealers/:productId', (req, res) => {
    const productId = req.params.productId;
    res.json(dealers[productId] || []);
});

// Endpoint para obtener el precio de un distribuidor específico
app.get('/price/:productId/:dealerId', (req, res) => {
    const { productId, dealerId } = req.params;
    const price = prices[productId] && prices[productId][dealerId];
    res.json(price ? { price } : { price: null });
});

app.listen(5001, () => console.log('Node.js Pricing Service running on port 5001'));