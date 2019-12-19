const namespace = 'example.taxonomy';
const key = 'spacecraft';
const type = 'example.telemetry';

const getDictionary = async () => {
    const res = await fetch('/js/dictionary.json');
    const data = await res.json();

    return data;
};

const ObjectProvider = {
    get: async identifier => {
        const dictionary = await getDictionary();

        if (identifier.key === key) {
            return {
                identifier,
                name: dictionary.name,
                type: 'folder',
                location: 'root'
            }
        } else {
            const measurement = dictionary.measurements
                .filter(m => m.key === identifier.key)[0];

            return {
                identifier,
                name: measurement.name,
                type,
                telemetry: {
                    values: measurement.values
                },
                location: `${namespace}:${key}`
            };
        }
    }
};

const CompositionProvider = {
    appliesTo: domainObject => domainObject.identifier.namespace === namespace &&
        domainObject.type === 'folder',
    load: async domainObject => {
        const dictionary = await getDictionary();

        return dictionary.measurements.map(m => ({ namespace, key: m.key }));
    }
}

const TelemetryPointType = {
    name: 'Eample Telemetry Point',
    description: 'Eample Telemetry Point from tutorial.',
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
