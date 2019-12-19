import express from 'express';

export default spacecraft => {
    const router = express.Router();

    router.ws('/', ws => {
        const notifySubscribers = point => {
            if (subscribed[point.id]) {
                ws.send(JSON.stringify(point));
            }
        };

        const unlisten = spacecraft.listen(notifySubscribers);
        const subscribed = {};
        const handlers = {
            subscribe: id => {
                subscribed[id] = true;
            },
            unsubscribe: id => {
                delete subscribed[id];
            }
        };

        ws.on('message', message => {
            const parts = message.split(' '),
                handler = handlers[parts[0]];
            if (handler) {
                handler.apply(handlers, parts.slice(1));
            }
        });

        ws.on('close', unlisten);
    });

    return router;
};
