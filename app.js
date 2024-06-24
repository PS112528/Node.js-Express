const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));
(async () => {
    const chalk = (await import('chalk')).default;

    app.listen(PORT, () => {
        debug("Listening on port" + chalk.red(" : " + PORT));
    })
})();
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs")

app.use("/products", productsRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'Rew55+', customers: ["opop", "koko", "lolo"] });
})

