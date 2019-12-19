const TelemetryProvider = {
    supportsRequest: domainObject => domainObject.type === type,
    request: async (domainObject, opts) => {
        const url = `/history/${domainObject.identifier.key}?start=${opts.start}&end=${opts.end}`
        const res = await fetch(url);
        const data = await res.json();
        console.log({data})
        return data;
    }
};

const HistoricalTelemetryPlugin = () => openmct => {
    console.log("HistoricalTelemetryPlugin Installed");
    
    openmct.telemetry.addProvider(TelemetryProvider);
};