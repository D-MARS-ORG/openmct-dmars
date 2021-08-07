const namespace = 'd-mars';
const key = 'habitat026';
const type = 'telemetryPoint';

const ObjectProvider = {
    get: async identifier => {
        if (identifier.key === key) {
            return {
                identifier,
                name: dictionary.rootId,
                type: 'folder',
                location: 'root'
            }
        } else {
            return {
                identifier,
                ...dictionary.openmct[identifier.key]
            };
        }
    }
};

const CompositionProvider = {
    appliesTo: domainObject => domainObject.identifier.namespace === namespace &&
        domainObject.type === 'folder',
    load: async ({ identifier }) => {
        return Object.keys(dictionary.openmct)
            .filter(k => dictionary.openmct[k].location === identifier.key)
            .map(k => ({ namespace, key: k, location: dictionary.openmct[k].location}));
    }
}

const TelemetryPointType = {
    name: 'telemetryPoint',
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
