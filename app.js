const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;


app.use(morgan('combined'));
(async () => {
    const chalk = (await import('chalk')).default;

    app.listen(port, () => {
        debug("Listening on port" + chalk.red(" : " + port));
    })
})();

app.get("/", (req,res) =>{

    res.send('Hello Rew');
})

