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
            new FirebaseStateItem("temperature-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Temperature", "Celsius", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("pressure-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Pressure", "hPa", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("altitude-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Altitude", "Meters", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("humidity-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Humidity", "Percentage", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("tvoc-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "TVOC", "ppb", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("eco2-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "eCO2", "ppm", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("raw-h2-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "H2", "ppm", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("raw-ethanol-35d460c9-48b3-428f-98ff-9c57a42fddeb", 0, "Ethanol", "ppm", "35d460c9-48b3-428f-98ff-9c57a42fddeb"),
            new FirebaseStateItem("temperature-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Temperature", "Celsius", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
            new FirebaseStateItem("pressure-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Pressure", "hPa", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
            new FirebaseStateItem("altitude-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Altitude", "Meters", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
            new FirebaseStateItem("humidity-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Humidity", "Percentage", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
            new FirebaseStateItem("tvoc-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "TVOC", "ppb", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
            new FirebaseStateItem("eco2-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "eCO2", "ppm", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
            new FirebaseStateItem("raw-h2-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "H2", "ppm", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
            new FirebaseStateItem("raw-ethanol-e82524b8-1067-48af-a7e4-da6583f2f8f0", 0, "Ethanol", "ppm", "e82524b8-1067-48af-a7e4-da6583f2f8f0"),
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