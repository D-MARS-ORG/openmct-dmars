import 'dotenv/config';
import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import cors from 'cors';

import Router from './routes';
import InitSockets from './sockets';
import Habitat from './habitat';

const habitat = new Habitat();
const app = express();

const server = http.createServer(app);
const io = socketIO().listen(server);
const port = process.env.PORT || 80;
const url = `localhost:${port}`;

app.use(cors());
app.options('*', cors());
app.use('/', Router(habitat));

InitSockets(io, habitat);

server.listen(port, () => {
    console.log(`D-MARS Open MCT hosted at http://${url}`);
});