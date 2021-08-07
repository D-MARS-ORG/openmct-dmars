import socketIO from 'socket.io';

import Habitat from './../habitat';
import StateItemInfo from '../models/StateItemInfo';

export default (io: socketIO.Namespace, habitat: Habitat) => {
    io.on('connection', socket => {
        const notifySubscribers = (stateItemInfo: StateItemInfo) => {
            if (subscribed[stateItemInfo.Name]) {
                socket.send(JSON.stringify(stateItemInfo));
            }
        };

        const unlisten = habitat.listen(notifySubscribers);
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
