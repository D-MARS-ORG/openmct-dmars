import axios from 'axios';
import qs from 'querystring';

const BASE_URL = 'https://api.devicewise.com/rest';
const TELIT_KEY = process.env.TELIT_KEY;

export const login = async (username, password) => {
    try {
        const { data: token } = await axios.post(`${BASE_URL}/auth`, qs.stringify({ username, password }));

        return token;
    }
    catch (err) {
        console.error(err);
    }
};

export const getSensorValue = async (sensorName, token) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${TELIT_KEY}/property/${sensorName}?sessionId=${token}`);
        
        return data.success ? data.params.value : null;
    }
    catch (err) {
        console.error(err);
    }
};