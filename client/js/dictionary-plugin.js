const namespace = 'd-mars';
const key = 'habitate026';
const type = 'sensors';

const ObjectProvider = {
    get: async identifier => {
        if (identifier.key === key) {
            return {
                identifier,
                name: dictionary.name,
                type: 'folder',
                location: 'root'
            }
        } else {
            const sensor = dictionary.sensors
                .filter(m => m.key === identifier.key)[0];

            return {
                identifier,
                name: sensor.name,
                type,
                telemetry: {
                    values: sensor.values
                },
                location: `${namespace}:${key}`
            };
        }
    }
};

const CompositionProvider = {
    appliesTo: domainObject => domainObject.identifier.namespace === namespace &&
        domainObject.type === 'folder',
    load: async domainObject => dictionary.sensors.map(m => ({ namespace, key: m.key }))
}

const TelemetryPointType = {
    name: 'Sensor',
    cssClass: 'icon-telemetry'
};

const DictionaryPlugin = () => openmct => {
    console.log("DictionaryPlugin Installed");

    openmct.objects.addRoot({
        namespace,
        key
    });

    openmct.objects.addProvider(namespace, ObjectProvider);
    openmct.composition.addProvider(CompositionProvider);

    openmct.types.addType(type, TelemetryPointType);
};
