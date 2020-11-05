import axios from 'axios';
import debounce from 'debounce-promise';

const BASE_URL = 'https://d-mars.firebaseio.com/telemetry/sandbox/v1/70276156-db9a-4a58-8125-b1401dad82a8/Habitat/Laboratory/b50321b6-479b-45a8-8d34-b085c062dfe0/9ab93a61-bfad-442a-b551-5a155545bb60';

const DEBOUNCE_DELAY = parseInt(process.env.DEBOUNCE_DELAY, 10);
const REQUESETS_LIMIT = parseInt(process.env.REQUESETS_LIMIT, 10);

let getRequestsAmount = 0;

export const getSensorValue = async (dataType: string, mesurementUnit: string) => {
    try {
        const res = await getValue(dataType, mesurementUnit);

        return res;
    }
    catch (err) {
        console.error(err);
    }
};

const getValue = debounce(async (dataType: string, mesurementUnit: string) => {
    if (getRequestsAmount > REQUESETS_LIMIT) return;

    getRequestsAmount++;

    const { data } = await axios.get(`${BASE_URL}/${dataType}/${mesurementUnit}.json?print=pretty&orderBy="timestamp"&limitToLast=1`);
    const key = Object.keys(data)[0];
    const { value } = data[key];

    getRequestsAmount = 0;

    return value;
}, DEBOUNCE_DELAY);