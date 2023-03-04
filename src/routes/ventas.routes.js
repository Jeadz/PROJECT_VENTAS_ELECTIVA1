const express = require("express");
const ventas_model = require("../models/ventas.model");
const ventas_routes_http = express.Router();

/*
    CREAR UNA VENTA 
    mongoose method: save()
    http://localhost:5000/
*/
ventas_routes_http.post("/", (req, res) => {
    const new_venta = ventas_model((req.body));
    new_venta
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

/*
    LISTAR TODAS LAS VENTAS DE LA BD
    mongoose  method: find ()
*/
ventas_routes_http.get("/", (req,res) => {
    ventas_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

/*
    CONSULTAR UNA VENTA POR ID 
    mongoose method: findById(_id:?)
*/
ventas_routes_http.get("/:ventaId", (req,res) => {
    const {ventaId} = req.params;
    ventas_model
        .findById({ _id: ventaId })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

module.exports = ventas_routes_http;