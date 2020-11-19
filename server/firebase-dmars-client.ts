import axios from 'axios';
import debounce from 'debounce-promise';;

import IFirebaseDmarsItem from './models/IFirebaseDmarsItem'

const BASE_URL = 'https://d-mars.firebaseio.com/telemetry/sandbox/v1/data.json';

const DEBOUNCE_DELAY = parseInt(process.env.DEBOUNCE_DELAY, 10);
const REQUESETS_LIMIT = parseInt(process.env.REQUESETS_LIMIT, 10);

let getRequestsAmount = 0;

export const getSensorValue = async (nodeId: string, dataType: string, mesurementUnit: string, delay: Date) => {
    try {
        const res = delay.getTime() !== new Date(0).getTime() ?
            await getDelayedValue(nodeId, dataType, mesurementUnit, delay) :
            await getValue(nodeId, dataType, mesurementUnit);

        return res;
    }
    catch (err) {
        console.error(err);
    }
};

const getDelayedValue = debounce(async (nodeId: string, dataType: string, mesurementUnit: string, delay: Date) => {
    if (getRequestsAmount > REQUESETS_LIMIT) return;

    getRequestsAmount++;

    const currentDate = new Date();
    const { data } = await axios.get(`${BASE_URL}?print=pretty&orderBy="node-id"&equalTo="${nodeId}"`);

    const item = Object.values(data)
        .filter((v: IFirebaseDmarsItem) =>
            v['data-type'] === dataType &&
            v['measurement-unit'] === mesurementUnit &&
            isBeforeDelay(v.timestamp, currentDate, delay))[0] as IFirebaseDmarsItem;

    getRequestsAmount = 0;

    return item ? item.value : 0;
}, DEBOUNCE_DELAY);

const isBeforeDelay = (timestamp: number, currentDate: Date, delay: Date) => timestamp === currentDate.getTime() + delay.getTime();

const getValue = debounce(async (nodeId: string, dataType: string, mesurementUnit: string) => {
    if (getRequestsAmount > REQUESETS_LIMIT) return;

    getRequestsAmount++;

    const { data } = await axios.get(`${BASE_URL}?print=pretty&orderBy="node-id"&equalTo="${nodeId}"`);

    const { value } = Object.values(data)
        .filter((v: IFirebaseDmarsItem) => v['data-type'] === dataType && v['measurement-unit'] === mesurementUnit)
        .sort((a: IFirebaseDmarsItem, b: IFirebaseDmarsItem) => b.timestamp - a.timestamp)[0] as IFirebaseDmarsItem;

    getRequestsAmount = 0;

    return value;
}, DEBOUNCE_DELAY);