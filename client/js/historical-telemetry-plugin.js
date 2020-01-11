const TelemetryProvider = {
    supportsRequest: domainObject => domainObject.type === type,
    request: async ({ identifier: { key } }, opts) => {
        const url = `/history/${key}?start=${opts.start}&end=${opts.end}`
        const res = await fetch(url);
        const data = await res.json();

        return data;
    }
};

const HistoricalTelemetryPlugin = () => openmct => {
    openmct.telemetry.addProvider(TelemetryProvider);
};