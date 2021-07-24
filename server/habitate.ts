import StateItem from './models/StateItem';
import StateItemInfo from './models/StateItemInfo';
import FirebaseStateItem from './models/FirebaseStateItem';

const UPDATE_INTERVAL_SEC = parseInt(process.env.UPDATE_INTERVAL_SEC, 10);

const minutesDelay = (minDelay: number) => {
    const d = new Date(0);
    d.setMinutes(minDelay);

    return d;
};

class Habitate {
    readonly stateItems: StateItem[];
    readonly history: { [key: string]: StateItemInfo[] } = {};
    readonly listeners: ((s: StateItemInfo) => void)[] = [];

    constructor() {
        const temMinutesDelay = minutesDelay(10);

        this.stateItems = [
            new FirebaseStateItem("temperature-9ab93a61-bfad-442a-b551-5a155545bb60", 0, "Temperature", "Celsius", "9ab93a61-bfad-442a-b551-5a155545bb60"),
            new FirebaseStateItem("delayed10Min-temperature-9ab93a61-bfad-442a-b551-5a155545bb60", 0, "Temperature", "Celsius", "9ab93a61-bfad-442a-b551-5a155545bb60", temMinutesDelay),
            new FirebaseStateItem("temperature-417fa14f-c213-4255-92a4-49d766ede1de", 0, "Temperature", "Celsius", "417fa14f-c213-4255-92a4-49d766ede1de"),
            new FirebaseStateItem("delayed10Min-temperature-417fa14f-c213-4255-92a4-49d766ede1de", 0, "Temperature", "Celsius", "417fa14f-c213-4255-92a4-49d766ede1de", temMinutesDelay),
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

export default Habitate;