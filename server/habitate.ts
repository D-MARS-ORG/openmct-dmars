import { login } from './telit-client';

import Sensor from './models/Sensor';
import SensorInfo from './models/SensorInfo';
import TelitSensor from './models/TelitSensor';
import TelitAlarm from './models/TelitAlarm';

class Habitate {
    readonly sensors: Sensor[];
    readonly history: { [key: string]: SensorInfo[] } = {};
    readonly listeners: ((s: SensorInfo) => void)[] = [];

    constructor() {
        this.sensors = [
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

        this.sensors.forEach(s => this.history[s.Name] = [], this);

        this.init();
    };

    notifyListeners() {
        const timestamp = Date.now();

        this.sensors.forEach(s => {
            const sensorInfo: SensorInfo = new SensorInfo(s.Name, s.Value, timestamp);

            this.notify(sensorInfo);
            this.history[s.Name].push(sensorInfo);
        }, this);
    }

    notify(sensorInfo: SensorInfo) {
        this.listeners.forEach(l => l(sensorInfo));
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
        this.sensors.forEach(s => s.Update());
    }

    listen(listener: (s: SensorInfo) => void) {
        this.listeners.push(listener);

        return function () {
            this.listeners = this.listeners.filter((l: (s: SensorInfo) => void) => l !== listener);
        }.bind(this);
    }
}

export default Habitate;