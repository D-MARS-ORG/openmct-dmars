import { login, getSensorValue } from './telit-client';

const USERNAME = process.env.TELIT_USERNAME;
const PASSWORD = process.env.TELIT_PASSWORD;

class Habitate {
    constructor() {
        this.sensors = {
            "acetone": 0,
            "amonium": 0,
            "methanol": 0,
            "ethanol": 0,
            "co": 0,
            "co2": 0,
            "battlevel": 0,
            "earthquake_value": 0,
            "light_value": 0,
            "sound_value": 0,
            "uv_value": 0
        };

        this.token = null;
        this.listeners = [];
        this.history = {};

        Object.keys(this.sensors).forEach(name => this.history[name] = [], this);

        this.init();
    };

    notifyListeners() {
        const timestamp = Date.now();

        Object.keys(this.sensors).forEach(name => {
            const sensorInfo = { timestamp, value: this.sensors[name], name };

            this.notify(sensorInfo);
            this.history[name].push(sensorInfo);
        }, this);
    }

    notify(sensorInfo) {
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
        this.token = await login(USERNAME, PASSWORD);
    }

    update() {
        Object.keys(this.sensors).forEach(name => this.updateSensor(name));
    }

    async updateSensor(name) {
        const value = await getSensorValue(name, this.token);

        if (value != null) {
            this.sensors[name] = value;
        }
        else {
            await this.authenticate();
            this.updateSensor(name);
        }
    }

    listen(listener) {
        this.listeners.push(listener);

        return function () {
            this.listeners = this.listeners.filter(l => l !== listener);
        }.bind(this);
    }
}

export default Habitate;