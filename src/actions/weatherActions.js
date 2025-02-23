export const CHANGE_CITY = 'CHANGE_CITY';
export const GET_WEATHER = 'GET_WEATHER';

export const changeCity = city => ({
    type: CHANGE_CITY,
    payload: city
})

export const getWeather = weather => ({
    type: GET_WEATHER,
    payload: weather
})