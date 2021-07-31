import axios from 'axios';
import debounce from 'debounce-promise';;

import IFirebaseDmarsItem from './models/IFirebaseDmarsItem'

const BASE_URL = 'https://d-mars.firebaseio.com/telemetry/production/v1/data.json';

const UPDATE_INTERVAL_SEC = parseInt(process.env.UPDATE_INTERVAL_SEC, 10);
const CONTINUOUS_REQUESETS_LIMIT = parseInt(process.env.CONTINUOUS_REQUESETS_LIMIT, 10);
const RESTART_REQUESTS_COUNT_DELAY_SEC = parseInt(process.env.RESTART_REQUESTS_COUNT_DELAY_SEC, 60);

let getRequestsAmount = 0;

setInterval(() => {
    getRequestsAmount = 0;
}, RESTART_REQUESTS_COUNT_DELAY_SEC * 1000);

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
    if (getRequestsAmount > CONTINUOUS_REQUESETS_LIMIT) return;

    getRequestsAmount++;

    const currentDate = new Date();
    const { data } = await axios.get(`${BASE_URL}?print=pretty&orderBy="node-id"&equalTo="${nodeId}"`);

    const item = Object.values(data)
        .filter((v: IFirebaseDmarsItem) =>
            v['data-type'] === dataType &&
            v['measurement-unit'] === mesurementUnit &&
            isBeforeDelay(v, currentDate, delay))
        .sort((a: IFirebaseDmarsItem, b: IFirebaseDmarsItem) => b.timestamp - a.timestamp)[0] as IFirebaseDmarsItem;

    return item ? item.value : 0;
}, UPDATE_INTERVAL_SEC);

const isBeforeDelay = (item: IFirebaseDmarsItem, currentDate: Date, delay: Date) => diffMinutes(currentDate, new Date(item.timestamp * 1000)) >= delay.getMinutes();

const diffMinutes = (dt1: Date, dt2: Date) => {
    const diff = (dt1.getTime() - dt2.getTime()) / 1000 / 60;

    return Math.abs(Math.round(diff));
}

const getValue = debounce(async (nodeId: string, dataType: string, mesurementUnit: string) => {
    if (getRequestsAmount > CONTINUOUS_REQUESETS_LIMIT) return;

    getRequestsAmount++;

    const { data } = await axios.get(`${BASE_URL}?print=pretty&orderBy="node-id"&equalTo="${nodeId}"`);

    const { value } = Object.values(data)
        .filter((v: IFirebaseDmarsItem) => v['data-type'] === dataType && v['measurement-unit'] === mesurementUnit)
        .sort((a: IFirebaseDmarsItem, b: IFirebaseDmarsItem) => b.timestamp - a.timestamp)[0] as IFirebaseDmarsItem;

    return value;
}, UPDATE_INTERVAL_SEC);