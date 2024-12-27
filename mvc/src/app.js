const express = require('express');
const app = express();
const mainRouter = require("./routers/main.js")

app.use(express.static('public'));

app.use("/", mainRouter);

app.listen(3000, () => console.log("corriendo en 3000"));

// :D