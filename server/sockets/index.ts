import socketIO from 'socket.io';

import Realtime from './realtime';
import Habitate from './../habitate';

export default (io: socketIO.Server, habitate: Habitate) => {
    Realtime(io.of('/realtime'), habitate);
};