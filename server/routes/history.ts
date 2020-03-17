import express from 'express';

import Habitate from './../habitate';
import StateItemInfo from '../models/StateItemInfo';

export default (habitate: Habitate) => {
    const router = express.Router();

    router.get('/:stateItemName', ({ query: { start, end }, params: { stateItemName } }, res) => {
        const stateItemNames = stateItemName.split(',');

        const sensorInfoData = stateItemNames.reduce(
            (resp, stateItemName) => resp.concat(
                habitate.history[stateItemName].filter((p: StateItemInfo) => p.Timestamp > +start && p.Timestamp < +end)
            ), []);

        const data = sensorInfoData.map((s: StateItemInfo) => ({name: s.Name, timestamp: s.Timestamp, value: s.Value}));

        res.status(200).json(data).end();
    });

    return router;
};
