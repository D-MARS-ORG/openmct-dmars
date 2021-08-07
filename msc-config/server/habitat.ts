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
        const delayConfig = minutesDelay(10);

        this.stateItems = [
            new FirebaseStateItem("temperature-MSC-417fa14f-c213-4255-92a4-49d766ede1de", 0, "Temperature MSC", "Celsius", "417fa14f-c213-4255-92a4-49d766ede1de",delayConfig),
            new FirebaseStateItem("temperature-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Temperature MSC", "Celsius", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("pressure-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Pressure MSC", "hPa", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("altitude-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Altitude MSC", "Meters", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("humidity-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Humidity MSC", "Percentage", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("tvoc-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "TVOC MSC", "ppb", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("eco2-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "eCO2 MSC", "ppm", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("raw-h2-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "H2 MSC", "ppm", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("raw-ethanol-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Ethanol MSC", "ppm", "35d460c9-48b3-428f-98ff-9c57a42fddeb",delayConfig),
            new FirebaseStateItem("temperature-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Temperature MSC", "Celsius", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
            new FirebaseStateItem("pressure-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Pressure MSC", "hPa", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
            new FirebaseStateItem("altitude-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Altitude MSC", "Meters", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
            new FirebaseStateItem("humidity-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Humidity MSC", "Percentage", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
            new FirebaseStateItem("tvoc-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "TVOC MSC", "ppb", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
            new FirebaseStateItem("eco2-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "eCO2 MSC", "ppm", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
            new FirebaseStateItem("raw-h2-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "H2 MSC", "ppm", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
            new FirebaseStateItem("raw-ethanol-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Ethanol MSC", "ppm", "e82524b8-1067-48af-a7e4-da6583f2f8f0",delayConfig),
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