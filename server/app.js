import express from 'express';
import expressWs from 'express-ws';
import Router from './routes/router';

const { app } = expressWs(express());

app.use('/', Router())

const port = process.env.PORT || 8080;
const url = `http://localhost:${port}`;

app.listen(port, () => {
    console.log(`Open MCT hosted at http://${url}`);
    console.log(`History hosted at http://${url}/history`);
    console.log(`Realtime hosted at ws://${url}/realtime`);
});