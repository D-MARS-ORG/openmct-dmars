import socketIO from 'socket.io';

import Habitate from './../habitate';
import SensorInfo from './../models/SensorInfo';

export default (io: socketIO.Namespace, habitate: Habitate) => {
    io.on('connection', socket => {
        const notifySubscribers = (sensorInfo: SensorInfo) => {
            if (subscribed[sensorInfo.Name]) {
                socket.send(JSON.stringify(sensorInfo));
            }
        };

        const unlisten = habitate.listen(notifySubscribers);
        const subscribed: { [key: string]: boolean } = { };

        const subscribe = (id: string) => {
            subscribed[id] = true;
        };

        const unsubscribe = (id: string) => {
            delete subscribed[id];
        };

        socket.on('subscribe', subscribe);
        socket.on('unsubscribe', unsubscribe);

        socket.on('close', unlisten);
    });
};
