import dotenv from 'dotenv';
import express from 'express';
import expressWs from 'express-ws';

import Spacecraft from './spacecraft';
import RealtimeRouter from './routes/realtime';
import HistoryRouter from './routes/history';

dotenv.config();

const { app } = expressWs(express());

const spacecraft = new Spacecraft();
const realtimeRouter = RealtimeRouter(spacecraft);
const historyRouter = HistoryRouter(spacecraft);

app.use('/', express.static(__dirname + '/../client'));
app.use('/openmct', express.static(__dirname + '/../node_modules/openmct/dist'));
app.use('/realtime', realtimeRouter);
app.use('/history', historyRouter);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Open MCT hosted at http://localhost:${port}`);
    console.log(`History hosted at http://localhost:${port}/history`);
    console.log(`Realtime hosted at ws://localhost:${port}/realtime`);
});
