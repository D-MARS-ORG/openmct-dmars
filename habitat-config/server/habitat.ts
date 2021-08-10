import StateItem from './models/StateItem';
import StateItemInfo from './models/StateItemInfo';
import FirebaseStateItem from './models/FirebaseStateItem';

const UPDATE_INTERVAL_SEC = parseInt(process.env.UPDATE_INTERVAL_SEC, 10);

const minutesDelay = (minDelay: number) => {
    const d = new Date(0);
    d.setMinutes(minDelay);

    return d;
};

class Habitat {
    readonly stateItems: StateItem[];
    readonly history: { [key: string]: StateItemInfo[] } = {};
    readonly listeners: ((s: StateItemInfo) => void)[] = [];

    constructor() {
        this.stateItems = [
            new FirebaseStateItem("temperature-417fa14f-c213-4255-92a4-49d766ede1de", 0, "Temperature", "Celsius", "417fa14f-c213-4255-92a4-49d766ede1de"),
            new FirebaseStateItem("temperature-ff4b8240-80d7-47cd-9ede-6d56752c88db", 0, "Temperature", "Celsius", "ff4b8240-80d7-47cd-9ede-6d56752c88db"),
            new FirebaseStateItem("pressure-4c884c66-7e37-4140-b872-b0e4722ddde1", 0, "Pressure", "hPa", "4c884c66-7e37-4140-b872-b0e4722ddde1"),
            new FirebaseStateItem("altitude-cd6b89ea-51f2-4911-8aad-bb6a339fb594", 0, "Altitude", "Meters", "cd6b89ea-51f2-4911-8aad-bb6a339fb594"),
            new FirebaseStateItem("humidity-8837e6c0-1fd6-4e6e-a3cd-da69367135a7", 0, "Humidity", "Percentage", "8837e6c0-1fd6-4e6e-a3cd-da69367135a7"),
            new FirebaseStateItem("tvoc-97bf84a8-4810-47cf-930d-f49ca733d2c1", 0, "TVOC", "ppb", "97bf84a8-4810-47cf-930d-f49ca733d2c1"),
            new FirebaseStateItem("eco2-ad702d2d-a134-407b-9cf7-270151ee177e", 0, "eCO2", "ppm", "ad702d2d-a134-407b-9cf7-270151ee177e"),
            new FirebaseStateItem("raw-h2-7fe15b40-7e4c-4382-8b92-ce2f019d5d31", 0, "H2", "ppm", "7fe15b40-7e4c-4382-8b92-ce2f019d5d31"),
            new FirebaseStateItem("raw-ethanol-2b01ca31-35fa-479f-a61c-ff47f6f7af5d", 0, "Ethanol", "ppm", "2b01ca31-35fa-479f-a61c-ff47f6f7af5d"),
            new FirebaseStateItem("temperature-d83b1285-b2c3-4e90-bc0f-52cae41e781e", 0, "Temperature", "Celsius", "d83b1285-b2c3-4e90-bc0f-52cae41e781e"),
            new FirebaseStateItem("pressure-81561394-a6f5-47b6-aabd-434861837fd7", 0, "Pressure", "hPa", "81561394-a6f5-47b6-aabd-434861837fd7"),
            new FirebaseStateItem("altitude-1416a19d-ff5f-4e89-9ef8-a43977c6f210", 0, "Altitude", "Meters", "1416a19d-ff5f-4e89-9ef8-a43977c6f210"),
            new FirebaseStateItem("humidity-b0052e24-8bb8-4d42-a732-d19c4f642a7c", 0, "Humidity", "Percentage", "b0052e24-8bb8-4d42-a732-d19c4f642a7c"),
            new FirebaseStateItem("tvoc-3fa885bc-f90a-41f6-99af-984aa2ec6cc0", 0, "TVOC", "ppb", "3fa885bc-f90a-41f6-99af-984aa2ec6cc0"),
            new FirebaseStateItem("eco2-21f24631-adef-487e-837a-fcd03606bb82", 0, "eCO2", "ppm", "21f24631-adef-487e-837a-fcd03606bb82"),
            new FirebaseStateItem("raw-h2-3138798d-8317-48cb-8d01-1c934d3aaf2f", 0, "H2", "ppm", "3138798d-8317-48cb-8d01-1c934d3aaf2f"),
            new FirebaseStateItem("raw-ethanol-a08f1a42-0120-4d84-a747-2bc86a8c7b48", 0, "Ethanol", "ppm", "a08f1a42-0120-4d84-a747-2bc86a8c7b48"),
        ];

        this.stateItems.forEach(s => this.history[s.Name] = [], this);

        this.init();
    };

    notifyListeners() {
        const timestamp = Date.now();

        this.stateItems.forEach(s => {
            const stateItemInfo: StateItemInfo = new StateItemInfo(s.Name, s.Value, timestamp);

            this.notify(stateItemInfo);
            this.history[s.Name].push(stateItemInfo);
        }, this);
    }

    notify(stateItemInfo: StateItemInfo) {
        this.listeners.forEach(l => l(stateItemInfo));
    }

    async init() {
        setInterval(function () {
            this.update();
            this.notifyListeners();
        }.bind(this), UPDATE_INTERVAL_SEC * 1000);
    };

    update() {
        this.stateItems.forEach(s => s.Update());
    }

    listen(listener: (s: StateItemInfo) => void) {
        this.listeners.push(listener);

        return function () {
            this.listeners = this.listeners.filter((l: (s: StateItemInfo) => void) => l !== listener);
        }.bind(this);
    }
}

export default Habitat;