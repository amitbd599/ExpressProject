const express = require("express");
const router = require("./src/Routes/api");
const app = new express();

//! Frontend URL Tagging API
app.use(router);
module.exports = app;
