import express from 'express';

export default habitate => {
    const router = express.Router();

    router.get('/:sensorName', ({ query: { start, end }, params: { sensorName } }, res) => {
        const sensorNames = sensorName.split(',');

        const data = sensorNames.reduce(
            (resp, sensorName) => resp.concat(
                habitate.history[sensorName].filter(p => p.timestamp > +start && p.timestamp < +end)
            ),
            []);

        res.status(200).json(data).end();
    });

    return router;
};
