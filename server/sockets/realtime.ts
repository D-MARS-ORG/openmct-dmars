import socketIO from 'socket.io';

import Habitate from './../habitate';
import StateItemInfo from '../models/StateItemInfo';

export default (io: socketIO.Namespace, habitate: Habitate) => {
    io.on('connection', socket => {
        const notifySubscribers = (stateItemInfo: StateItemInfo) => {
            if (subscribed[stateItemInfo.Name]) {
                socket.send(JSON.stringify(stateItemInfo));
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
