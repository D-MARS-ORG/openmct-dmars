import axios from 'axios';

import IFirebaseDmarsItem from './models/IFirebaseDmarsItem'

const BASE_URL = 'https://d-mars.firebaseio.com/telemetry/production/v1/data.json';

const CONTINUOUS_REQUESETS_LIMIT = parseInt(process.env.CONTINUOUS_REQUESETS_LIMIT, 10);
const RESTART_REQUESTS_COUNT_DELAY_SEC = parseInt(process.env.RESTART_REQUESTS_COUNT_DELAY_SEC, 60);

let requestsAmounts: { [key: string]: number; } = {};

setInterval(() => {
    requestsAmounts = {};
}, RESTART_REQUESTS_COUNT_DELAY_SEC * 1000);

export const getSensorValue = async (nodeId: string, dataType: string, mesurementUnit: string, delay: Date) => {
    try {
    if (getRequestsAmount(nodeId) > CONTINUOUS_REQUESETS_LIMIT) return;

    updateRequestsAmount(nodeId);

    const res = delay.getTime() !== new Date(0).getTime() ?
            await getDelayedValue(nodeId, dataType, mesurementUnit, delay) :
            await getValue(nodeId, dataType, mesurementUnit);

        return res;
    }
    catch (err) {
        console.error(err);
    }
};

const getDelayedValue = async (nodeId: string, dataType: string, mesurementUnit: string, delay: Date) => {
    const currentDate = new Date();
    const url = `${BASE_URL}?print=pretty&orderBy="node-id"&equalTo="${nodeId}"`;
    const { data } = await axios.get(url);

    const item = Object.values(data)
        .filter((v: IFirebaseDmarsItem) =>
            v['data-type'] === dataType &&
            v['measurement-unit'] === mesurementUnit &&
            isBeforeDelay(v, currentDate, delay))
        .sort((a: IFirebaseDmarsItem, b: IFirebaseDmarsItem) => b.timestamp - a.timestamp)[0] as IFirebaseDmarsItem;

    return item ? item.value : 0;
}

const isBeforeDelay = (item: IFirebaseDmarsItem, currentDate: Date, delay: Date) => diffMinutes(currentDate, new Date(item.timestamp * 1000)) >= delay.getMinutes();

const diffMinutes = (dt1: Date, dt2: Date) => {
    const diff = (dt1.getTime() - dt2.getTime()) / 1000 / 60;

    return Math.abs(Math.round(diff));
}

const getValue = async (nodeId: string, dataType: string, mesurementUnit: string) => {
    const url = `${BASE_URL}?print=pretty&orderBy="node-id"&equalTo="${nodeId}"`;
    const { data } = await axios.get(url);

    const { value } = Object.values(data)
        .filter((v: IFirebaseDmarsItem) => v['data-type'] === dataType && v['measurement-unit'] === mesurementUnit)
        .sort((a: IFirebaseDmarsItem, b: IFirebaseDmarsItem) => b.timestamp - a.timestamp)[0] as IFirebaseDmarsItem;

    return value;
};

const updateRequestsAmount = (nodeId: string) => {
    if(!(nodeId in requestsAmounts))
    {
        requestsAmounts[nodeId] = 0;
    }

    requestsAmounts[nodeId]++;
};

const getRequestsAmount = (nodeId: string) => nodeId in requestsAmounts ? requestsAmounts[nodeId] : 0;