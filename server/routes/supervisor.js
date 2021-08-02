const express = require('express');
const supervisor = require('../models/supervisor');



const Supervisor = require('../models/supervisor');

const app = express();

app.get('/supervisor', function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    supervisor.find({ estado: true })
        .skip(desde)
        .limit(limite)
        .exec((err, supervisor) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            supervisor.countDocuments({ estado: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    numero: conteo,
                    supervisor
                })
            })


        });

});



app.post('/supervisor', function(req, res) {
    let body = req.body;

    let supervisor = new Supervisor({
        
        cedulas: body.cedulas,
        cedulae: body.cedulae,
        puntualidad: body.puntualidad,
        responsabilidad: body.responsabilidad,
        comentario: body.comentario,
        fecha: body.fecha
        
        
        

    });
    


    supervisor.save((err, supervisorDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            supervisor: supervisorDB
        });

    });

});




app.delete('/supervisor/:id', function(req, res) {

    let id = req.params.id;

    let desactivar = {
        estado: false
    };


    Enceustas.findByIdAndUpdate(id, desactivar, { new: true, runValidators: true, context: 'query' },
        (err, supervisorDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            if (!supervisorDB) {
                return res.status(400).json({
                    ok: false,
                    err: "Supervisor no hallado en la BDD"
                });
            }

            res.json({
                ok: true,
                supervisor: supervisorDB
            });

        });

});

module.exports = app;