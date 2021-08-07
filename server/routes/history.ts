import express from 'express';

import Habitat from './../habitat';
import StateItemInfo from '../models/StateItemInfo';

export default (habitat: Habitat) => {
    const router = express.Router();

    router.get('/:stateItemName', ({ query: { start, end }, params: { stateItemName } }, res) => {
        const stateItemNames = stateItemName.split(',');

        const sensorInfoData = stateItemNames.reduce(
            (resp, stateItemName) => resp.concat(
                habitat.history[stateItemName].filter((p: StateItemInfo) => p.Timestamp > +start && p.Timestamp < +end)
            ), []);

        const data = sensorInfoData.map((s: StateItemInfo) => ({name: s.Name, timestamp: s.Timestamp, value: s.Value}));

        res.status(200).json(data).end();
    });

    return router;
};
