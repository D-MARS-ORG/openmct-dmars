import express from 'express';

export default habitate => {
    const router = express.Router();

    router.ws('/', ws => {
        const notifySubscribers = sensorInfo => {
            if (subscribed[sensorInfo.name]) {
                ws.send(JSON.stringify(sensorInfo));
            }
        };

        const unlisten = habitate.listen(notifySubscribers);
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
            const parts = message.split(' ');
            const handler = handlers[parts[0]];
            
            if (handler) {
                handler.apply(handlers, parts.slice(1));
            }
        });

        ws.on('close', unlisten);
    });

    return router;
};
