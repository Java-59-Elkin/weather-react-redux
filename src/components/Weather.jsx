import {api_key, base_url, weather_cache_time} from "../utils/constants.js";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {putWeather} from "../actions/weatherActions.js";

const Weather = () => {
    const city = useSelector(state => state.city.city);
    const [message, setMessage] = useState('Enter city name');
    const [timeStamp, setTimeStamp] = useState(0);
    const dispatch = useDispatch();
    const weather = useSelector(state => state.weather.weather);

    const getWeather = async () => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            console.log("API response data:", data);
            dispatch(putWeather(data));

            setTimeStamp(Date.now());
            setMessage('');
        } catch (e) {
            setMessage(e.message);
        }
    }

    console.log("weather:", weather);

    useEffect(() => {
        if (city) {
            getWeather();
        }
    }, [city]);

    useEffect(() => {
        const interval = setInterval(() => {
            // TODO
        }, weather_cache_time);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.city}, {weather.country}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>

                </>
            }
            {message}
        </div>
    );


};

export default Weather;