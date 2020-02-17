import { login, getAlarmValue } from '../telit-client';
import Sensor from './Sensor';

export default class TelitAlarm extends Sensor {
    async Update() {
        const value = await getAlarmValue(this.Name);

        if (value != null) {
            this.Value = value;
        }
        else {
            await login();
            this.Update();
        }
    }
}