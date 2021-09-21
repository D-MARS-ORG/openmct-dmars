import axios from 'axios';
import IFirebaseDmarsItem from './models/IFirebaseDmarsItem'

const Cache = require('timed-cache')

const BASE_URL = 'https://d-mars.firebaseio.com/telemetry/production/v1/data.json';
const CONTINUOUS_REQUESETS_LIMIT = parseInt(process.env.CONTINUOUS_REQUESETS_LIMIT, 10);
const RESTART_REQUESTS_COUNT_DELAY_SEC = parseInt(process.env.RESTART_REQUESTS_COUNT_DELAY_SEC, 60);
const LIMIT_LAST = parseInt(process.env.LIMIT_LAST, 60);

let requestsAmounts: { [key: string]: number; } = {};
const cache = new Cache({ defaultTtl: 10 * 60 * 1000 });

setInterval(() => {
    requestsAmounts = {};
}, RESTART_REQUESTS_COUNT_DELAY_SEC * 1000);

export const getSensorValue = async (nodeId: string, dataType: string, mesurementUnit: string, delay: Date) => {
    try {
    if (getRequestsAmount(nodeId) > CONTINUOUS_REQUESETS_LIMIT) return;

    updateRequestsAmount(nodeId);

    const res = delay.getTime() !== new Date(0).getTime() ?
            await getDelayedValue(nodeId, delay) :
            await getValue(nodeId, dataType, mesurementUnit);

        return res;
    }
    catch (err) {
        console.error(err);
    }
};

const getDelayedValue = async (nodeId: string, delay: Date) => {
    const currentDate = new Date();
    const beforeDelayDate = new Date(currentDate.getTime() + delay.getTime());

    return cache.get({ nodeId, date: beforeDelayDate }) ?? 0;
}

const isBeforeDelay = (item: IFirebaseDmarsItem, currentDate: Date, delay: Date) => diffMinutes(currentDate, new Date(item.timestamp * 1000)) >= delay.getMinutes();

const diffMinutes = (dt1: Date, dt2: Date) => {
    const diff = (dt1.getTime() - dt2.getTime()) / 1000 / 60;

    return Math.abs(Math.round(diff));
}

const getValue = async (nodeId: string, dataType: string, mesurementUnit: string) => {
    const url = `${BASE_URL}?print=pretty&orderBy="timestamp"&limitToLast=${LIMIT_LAST}"`;
    const { data } = await axios.get(url);
    const currentDate = new Date();

    const { value } = Object.values(data)
        .filter((v: IFirebaseDmarsItem) =>
            v['data-type'] === dataType &&
            v['measurement-unit'] === mesurementUnit &&
            v['node-id'] === nodeId)[0] as IFirebaseDmarsItem;

    cache.put({ nodeId, date: currentDate }, value);

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