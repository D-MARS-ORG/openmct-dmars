import socketIO from 'socket.io';

import Realtime from './realtime';
import Habitat from './../habitat';

export default (io: socketIO.Server, habitat: Habitat) => {
    Realtime(io.of('/realtime'), habitat);
};