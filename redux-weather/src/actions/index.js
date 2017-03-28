import axios from 'axios'; // http library

const API_KEY = '66f33b4c0abdd88516742c316185b42a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// action type names to reference instead of exact string
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action-creator
// put async operations in action-creators
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // returns a promise

    // action
    // return request promise as payload
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}