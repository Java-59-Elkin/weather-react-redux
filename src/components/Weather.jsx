import {useSelector} from "react-redux";

const Weather = () => {
    const message = useSelector(state => state.message);
    const weather = useSelector(state => state.weatherInfo);

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    );
}

export default Weather;