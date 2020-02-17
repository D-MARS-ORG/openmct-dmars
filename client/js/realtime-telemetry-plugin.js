const RealtimeTelemetryPlugin = () => openmct => {
    const socket = io.connect(`${location.origin}/realtime`);

    const listener = {};

    socket.on('message', data => {
        const propertyInfo = JSON.parse(data);

        listener[propertyInfo.name] && listener[propertyInfo.name](propertyInfo);
    });

    const TelemetryProvider = {
        supportsSubscribe: domainObject => domainObject.type === type,
        subscribe: ({identifier: {key}}, callback) => {
            listener[key] = callback;
            socket.emit('subscribe', key);

            return () => {
                delete listener[key];
                socket.emit('unsubscribe', key);
            };
        }
    };

    openmct.telemetry.addProvider(TelemetryProvider);
};