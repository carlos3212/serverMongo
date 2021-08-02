const express = require('express');



const Encuestas = require('../models/encuestas');

const app = express();

app.get('/encuestas', function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Encuestas.find({ estado: true })
        .skip(desde)
        .limit(limite)
        .exec((err, encuestas) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Encuestas.countDocuments({ estado: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    numero: conteo,
                    encuestas
                })
            })


        });

});



app.post('/encuestas', function(req, res) {
    let body = req.body;

    let encuestas = new Encuestas({
        cedulae: body.cedulae,
        cedulas: body.cedulas,
        provincia: body.provincia,
        ciudad: body.ciudad,
        parroquia: body.parroquia,
        fecha: body.fecha,
        pregunta1: body.pregunta1,
        pregunta2: body.pregunta2,
        

    });
    


    encuestas.save((err, encuestasDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            encuestas: encuestasDB
        });

    });

});




app.delete('/encuestas/:id', function(req, res) {

    let id = req.params.id;

    let desactivar = {
        estado: false
    };


    Enceustas.findByIdAndUpdate(id, desactivar, { new: true, runValidators: true, context: 'query' },
        (err, encuestasDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            if (!encuestasDB) {
                return res.status(400).json({
                    ok: false,
                    err: "Encuesta no hallado en la BDD"
                });
            }

            res.json({
                ok: true,
                encuestas: encuestasDB
            });

        });

});

module.exports = app;