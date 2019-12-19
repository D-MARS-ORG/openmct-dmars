const RealtimeTelemetryPlugin = () => openmct => {
    console.log("RealtimeTelemetryPlugin Installed");

    const soket = new WebSocket(`${location.origin.replace(/^http/, 'ws')}/realtime/`);
    const listener = {};

    soket.onmessage = ({ data }) => {
        const point = JSON.parse(data);

        listener[point.id] && listener[point.id](point);
    };

    const TelemetryProvider = {
        supportsSubscribe: domainObject => domainObject.type === type,
        subscribe: (domainObject, callback) => {
            listener[domainObject.identifier.key] = callback;
            soket.send(`subscribe ${domainObject.identifier.key}`);

            return () => {
                delete listener[domainObject.identifier.key];
                soket.send(`unsubscribe ${domainObject.identifier.key}`);
            };
        }
    };

    openmct.telemetry.addProvider(TelemetryProvider);
};