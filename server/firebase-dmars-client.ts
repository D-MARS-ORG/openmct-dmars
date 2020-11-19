import axios from 'axios';
import debounce from 'debounce-promise';;

import IFirebaseDmarsItem from './models/IFirebaseDmarsItem'

const BASE_URL = 'https://d-mars.firebaseio.com/telemetry/sandbox/v1/data.json';

const DEBOUNCE_DELAY = parseInt(process.env.DEBOUNCE_DELAY, 10);
const REQUESETS_LIMIT = parseInt(process.env.REQUESETS_LIMIT, 10);

let getRequestsAmount = 0;

export const getSensorValue = async (nodeId: string, dataType: string, mesurementUnit: string) => {
    try {
        const res = await getValue(nodeId, dataType, mesurementUnit);

        return res;
    }
    catch (err) {
        console.error(err);
    }
};

const getValue = debounce(async (nodeId: string, dataType: string, mesurementUnit: string) => {
    if (getRequestsAmount > REQUESETS_LIMIT) return;

    getRequestsAmount++;

    const { data } = await axios.get(`${BASE_URL}?print=pretty&orderBy="node-id"&equalTo="${nodeId}"`);

    const { value } = Object.values(data)
        .filter((v: IFirebaseDmarsItem) => v['data-type'] === 'Temperature' && v['measurement-unit'] === 'Celsius')
        .sort((a: IFirebaseDmarsItem, b: IFirebaseDmarsItem) => b.timestamp - a.timestamp)[0] as IFirebaseDmarsItem;

    getRequestsAmount = 0;

    return value;
}, DEBOUNCE_DELAY);