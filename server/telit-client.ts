import axios from 'axios';
import qs from 'querystring';
import debounce from 'debounce-promise';

const BASE_URL = 'https://api.devicewise.com';
const USERNAME = process.env.TELIT_USERNAME;
const PASSWORD = process.env.TELIT_PASSWORD;

const DEBOUNCE_DELAY = parseInt(process.env.DEBOUNCE_DELAY, 10);
const REQUESETS_LIMIT = parseInt(process.env.REQUESETS_LIMIT, 10);

let token: string = null;
let authRequestsAmount = 0;
let getStateRequestsAmount = 0;

export const login = debounce(async () => {
    try {
        if (authRequestsAmount > REQUESETS_LIMIT) return;

        authRequestsAmount++;

        const { data: newToken } = await axios.post(`${BASE_URL}/rest/auth`, qs.stringify({ username: USERNAME, password: PASSWORD }));

        token = newToken;
        authRequestsAmount = 0
    }
    catch (err) {
        console.error('err login');
    }
}, DEBOUNCE_DELAY);

export const getSensorValue = async (sensorName: string) => {
    try {
        const res = await getState();

        return res && res.success ? res.sensors[sensorName] : null;
    }
    catch (err) {
        console.error(err);
    }
};

export const getAlarmValue = async (sensorName: string) => {
    try {
        const res = await getState();

        return res && res.success ? res.alarms[sensorName] : null;
    }
    catch (err) {
        console.error('err getAlarmValue');
    }
};

const getState = debounce(async () => {
    if (getStateRequestsAmount > REQUESETS_LIMIT) return;

    getStateRequestsAmount++;

    const { data } = await axios.post(`${BASE_URL}/api`, JSON.stringify(config()));
    const success = data.success || (data.list && data.list.success) || false;

    if (!success) return { success, alarms: null, sensors: null };

    const { list: { params: { result: [{ alarms, properties: sensors }] } } } = data;

    getStateRequestsAmount = 0;

    return { success, alarms, sensors };
}, DEBOUNCE_DELAY);

const config = () => ({
    list: {
        command: 'thing.list',
        params: {
            limit: 1,
        }
    },
    auth: {
        sessionId: token
    }
});