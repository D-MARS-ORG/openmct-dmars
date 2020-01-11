import express from 'express';

import Habitate from '../habitate';
import RealtimeRouter from './realtime';
import HistoryRouter from './history';

export default () => {
    const router = express.Router();

    const habitate = new Habitate();
    const realtimeRouter = RealtimeRouter(habitate);
    const historyRouter = HistoryRouter(habitate);

    router.use('/', express.static(__dirname + '/../../client'));
    router.use('/openmct', express.static(__dirname + '/../../node_modules/openmct/dist'));
    router.use('/realtime', realtimeRouter);
    router.use('/history', historyRouter);

    return router;
};