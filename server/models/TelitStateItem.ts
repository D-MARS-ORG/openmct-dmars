import { login } from '../telit-client';
import StateItem from './StateItem';

export default abstract class TelitStateItem extends StateItem {
    abstract GetStateItemValue(name: string): Promise<any>;

    async Update() {
        const value = await this.GetStateItemValue(this.Name);

        if (value != null) {
            this.Value = value;
        }
        else {
            await login();
            await this.Update();
        }
    }
};