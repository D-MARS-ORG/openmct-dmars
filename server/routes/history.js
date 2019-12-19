import express from 'express';

export default spacecraft => {
    const router = express.Router();

    router.get('/:pointId', (req, res) => {
        const start = +req.query.start;
        const end = +req.query.end;
        const ids = req.params.pointId.split(',');

        const response = ids.reduce(
            (resp, id) => resp.concat(
                spacecraft.history[id].filter(p => p.timestamp > start && p.timestamp < end)
            ),
            []);
        res.status(200).json(response).end();
    });

    return router;
};
