const express = require('express');
const app = express();
const port = 3000;

    app.get('/', (request, response) => {
        throw new Error('oops');
    });

    app.use((err, request, response, next) => {
        console.log(err);
        response.status(500).send('Something broke!');
    });

    app.listen(port);
