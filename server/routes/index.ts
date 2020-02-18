import express from 'express';

import HistoryRouter from './history';
import Habitate from './../habitate';

export default (habitate: Habitate) => {
    const router = express.Router();

    const historyRouter = HistoryRouter(habitate);

    router.use('/', express.static(__dirname + '/../../client'));
    router.use('/openmct', express.static(__dirname + '/../../node_modules/openmct/dist'));
    router.use('/history', historyRouter);

    return router;
};