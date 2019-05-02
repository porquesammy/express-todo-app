// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const items = ['Gym', 'Grocery Shopping', 'Job Hunt'];
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', function(req, res) {
        const today = new Date();

        const options = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
        };

        const day = today.toLocaleDateString('es-US', options);

        res.render('list', { kindOfDay: day, newListItems: items });
});

app.post('/', function(req, res) {
        const item = req.body.newItem;
        items.push(item);
        res.redirect('/');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Port 3000'));
