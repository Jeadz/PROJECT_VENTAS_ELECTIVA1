const express = require("express");
const ventas_routes_access = require("./ventas.routes");
const routes = express.Router();

const app_routes_system = (app) => {
    /* http://localhost:5000/api/v1 */
    app.use("/api/v1", routes);
    /* http://localhost:5000/api/v1/users */
    routes.use("/ventas", ventas_routes_access);
};

module.exports = app_routes_system;