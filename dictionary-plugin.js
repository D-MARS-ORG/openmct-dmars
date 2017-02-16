/**

Taxonomy Utilizes Roots, Composition, and object provider APIs.

Need to read a source dictionary, json file is fine.

Add single root
Add composition for root
Add subobjects


*/

(function () {

    function getDictionary() {
        return http.get('/dictionary.json')
            .then(function (result) {
                return result.data;
            });
    }

    var objectProvider = {
        get: function (identifier) {
            return getDictionary().then(function (dictionary) {
                    if (identifier.key === 'spacecraft') {
                        return {
                            identifier: identifier,
                            name: dictionary.name,
                            type: 'folder',
                            location: 'ROOT'
                        };
                    } else {
                        var measurement = dictionary.measurements.filter(function (m) {
                            return m.key === identifier.key;
                        })[0];
                        return {
                            identifier: identifier,
                            name: measurement.name,
                            type: 'example.telemetry',
                            telemetry: measurement,
                            location: 'example.taxonomy:spacecraft'
                        };
                    }
                });
        }
    };

    var compositionProvider = {
        appliesTo: function (domainObject) {
            return domainObject.identifier.namespace === 'example.taxonomy' &&
                   domainObject.type === 'folder';
        },
        load: function (domainObject) {
            return getDictionary()
                .then(function (dictionary) {
                    return dictionary.measurements.map(function (m) {
                        return {
                            namespace: 'example.taxonomy',
                            key: m.key
                        };
                    });
                });
        }
    };

    window.DictionaryPlugin = function (openmct) {
        openmct.objects.addRoot({
            namespace: 'example.taxonomy',
            key: 'spacecraft'
        });

        openmct.objects.addProvider('example.taxonomy', objectProvider);

        openmct.composition.addProvider(compositionProvider);

        openmct.types.addType('example.telemetry', {
            name: 'Example Telemetry Point',
            description: 'Example telemetry point from our happy tutorial.',
            cssClass: 'icon-telemetry'
        });

    };

}());
