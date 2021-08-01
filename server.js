require("./server/config");

const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.urlencoded({ extended: false }));

app.use(require('./server/routes/usuario'));


mongoose.connect(
    process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    (err, res) => {
        if (err) throw err;

        console.log("Base de datos ONLINE!");
    });

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto:", process.env.PORT);
});