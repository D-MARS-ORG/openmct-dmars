import { getSensorValue } from '../telit-client';
import TelitStateItem from './TelitStateItem';

export default class TelitSensor extends TelitStateItem {
    GetStateItemValue(name: string): Promise<any> {
        return getSensorValue(name);
    }
}