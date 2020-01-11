const RealtimeTelemetryPlugin = () => openmct => {
    const soket = new WebSocket(`${location.origin.replace(/^http/, 'ws')}/realtime/`);
    const listener = {};

    soket.onmessage = ({ data }) => {
        const propertyInfo = JSON.parse(data);

        listener[propertyInfo.name] && listener[propertyInfo.name](point);
    };

    const TelemetryProvider = {
        supportsSubscribe: domainObject => domainObject.type === type,
        subscribe: ({identifier: key}, callback) => {
            listener[key] = callback;
            soket.send(`subscribe ${key}`);

            return () => {
                delete listener[key];
                soket.send(`unsubscribe ${key}`);
            };
        }
    };

    openmct.telemetry.addProvider(TelemetryProvider);
};