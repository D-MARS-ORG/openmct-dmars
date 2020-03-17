import { getAlarmValue } from '../telit-client';
import TelitStateItem from './TelitStateItem';

export default class TelitAlarm extends TelitStateItem {
    GetStateItemValue(name: string): Promise<any> {
        return getAlarmValue(this.Name);
    }
}