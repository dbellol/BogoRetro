const express = require('express');
const app = express();
const cors = require('cors');
const mercadopago = require('mercadopago');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// Configura tu access token de Mercado Pago
mercadopago.configure({
    access_token: 'TEST-7908391112700046-112614-97e524e1d0ed04b650a4c522498da297-1565558921'
});

app.post('/create_preference', (req, res) => {
    const items = req.body.items.map(item => {
        return {
            title: item.title,
            unit_price: Number(item.unit_price),
            quantity: Number(item.quantity),
            currency_id: item.currency_id
        };
    });

    const preference = {
        items: items,
        back_urls:{
            success:'http://localhost:3000/',
            failure:'http://localhost:3000/'
        }
        // Puedes añadir más configuraciones aquí si es necesario
    };

    mercadopago.preferences.create(preference)
        .then(response => {
            // Responde con el ID de la preferencia de pago
            res.json({ id: response.body.id });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({ error: 'Error al crear la preferencia de pago' });
        });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
