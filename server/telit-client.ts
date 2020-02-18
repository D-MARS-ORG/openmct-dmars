import axios from 'axios';
import qs from 'querystring';

const BASE_URL = 'https://api.devicewise.com';
const TELIT_KEY = process.env.TELIT_KEY;
const USERNAME = process.env.TELIT_USERNAME;
const PASSWORD = process.env.TELIT_PASSWORD;

let token: string = null;

export const login = async () => {
    try {
        const { data: newToken } = await axios.post(`${BASE_URL}/rest/auth`, qs.stringify({ username: USERNAME, password: PASSWORD }));

        token = newToken;
    }
    catch (err) {
        console.error(err);
    }
};

export const getSensorValue = async (sensorName: string) => {
    try {
        const { success, sensors } = await getState();

        return success ? sensors[sensorName] : null;
    }
    catch (err) {
        console.error(err);
    }
};

export const getAlarmValue = async (sensorName: string) => {
    try {
        const { success, alarms } = await getState();

        return success ? alarms[sensorName] : null;
    }
    catch (err) {
        console.error(err);
    }
};

const getState = async () => {
    const { data: { list: { success, params: { result } } } } = await axios.post(`${BASE_URL}/api`, JSON.stringify(config()));
    const { alarms, properties: sensors } = success ? result[0] : { alarms: null, properties: null};

    return { success, alarms, sensors };
};

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