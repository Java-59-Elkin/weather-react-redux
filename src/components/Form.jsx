import {useDispatch, useSelector} from "react-redux";
import {putMessage, putWeatherInfo} from "../actions/weatherAction.js";
import {api_key, base_url, weather_cache_time} from "../utils/constants.js";

const Form = () => {
    const dispatch = useDispatch();
    const {timestamp, city: name} = useSelector(state => state.weatherInfo);

    const handleClickGetWeather = e => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        if (city !== name || Date.now() - timestamp > weather_cache_time) {
            fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
                .then(result => result.json())
                .then(data => {
                    dispatch(putWeatherInfo({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset * 1000,
                        timestamp: Date.now()
                    }))
                    dispatch(putMessage(''))
                })
                .catch(e => {
                    console.log(e);
                    dispatch(putMessage('Enter correct city name'));
                })
        }
        e.target.city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;