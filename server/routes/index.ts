import express from 'express';

import HistoryRouter from './history';
import Habitat from './../habitat';

export default (habitat: Habitat) => {
    const router = express.Router();

    const historyRouter = HistoryRouter(habitat);

    router.use('/', express.static(__dirname + '/../../client'));
    router.use('/openmct', express.static(__dirname + '/../../node_modules/openmct/dist'));
    router.use('/history', historyRouter);

    return router;
};