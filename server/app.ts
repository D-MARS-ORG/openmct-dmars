import 'dotenv/config';
import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import cors from 'cors';

import Router from './routes';
import InitSockets from './sockets';
import Habitate from './habitate';

const habitate = new Habitate();
const app = express();

const server = http.createServer(app);
const io = socketIO().listen(server);
const port = process.env.PORT || 8080;
const url = `localhost:${port}`;

app.use(cors());
app.options('*', cors());
app.use('/', Router(habitate));

InitSockets(io, habitate);

server.listen(port, () => {
    console.log(`D-MARS Open MCT hosted at http://${url}`);
});