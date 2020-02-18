import express from 'express';

import Habitate from './../habitate';
import SensorInfo from './../models/SensorInfo';

export default (habitate: Habitate) => {
    const router = express.Router();

    router.get('/:sensorName', ({ query: { start, end }, params: { sensorName } }, res) => {
        const sensorNames = sensorName.split(',');

        const sensorInfoData = sensorNames.reduce(
            (resp, sensorName) => resp.concat(
                habitate.history[sensorName].filter((p: SensorInfo) => p.Timestamp > +start && p.Timestamp < +end)
            ), []);

        const data = sensorInfoData.map((s: SensorInfo) => ({name: s.Name, timestamp: s.Timestamp, value: s.Value}));

        res.status(200).json(data).end();
    });

    return router;
};
