import { login } from './telit-client';

import StateItem from './models/StateItem';
import StateItemInfo from './models/StateItemInfo';
import TelitSensor from './models/TelitSensor';
import TelitAlarm from './models/TelitAlarm';

class Habitate {
    readonly stateItems: StateItem[];
    readonly history: { [key: string]: StateItemInfo[] } = {};
    readonly listeners: ((s: StateItemInfo) => void)[] = [];

    constructor() {
        this.stateItems = [
            new TelitSensor("acetone", 0),
            new TelitSensor("amonium", 0),
            new TelitSensor("methanol", 0),
            new TelitSensor("ethanol", 0),
            new TelitSensor("co", 0),
            new TelitSensor("co2", 0),
            new TelitSensor("battlevel", 0, val => val / 1000),
            new TelitSensor("earthquake_value", 0, val => val > 0),
            new TelitSensor("light_value", 0),
            new TelitSensor("sound_value", 0),
            new TelitSensor("uv_value", 0),
            new TelitAlarm("battlevelalarm", 0),
            new TelitAlarm("light_sensor", 0),
            new TelitAlarm("accel", 0),
            new TelitAlarm("uv_sensor", 0),
            new TelitAlarm("sound_sensor", 0)
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
        await this.authenticate();

        setInterval(function () {
            this.update();
            this.notifyListeners();
        }.bind(this), 1000);
    };

    async authenticate() {
        await login();
    }

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