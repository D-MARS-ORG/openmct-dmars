import Sensor from './Sensor';
import { login, getSensorValue } from '../telit-client';

export default class TelitSensor extends Sensor {
    async Update() {
        const value = await getSensorValue(this.Name);

        if (value != null) {
            this.Value = value;
        }
        else {
            await login();
            this.Update();
        }
    }
}