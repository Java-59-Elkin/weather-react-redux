export const CHANGE_CITY = 'CHANGE_CITY';
export const PUT_WEATHER = 'PUT_WEATHER';

export const changeCity = city => ({
    type: CHANGE_CITY,
    payload: city
})

export const putWeather = weather => ({
    type: PUT_WEATHER,
    payload: weather
})