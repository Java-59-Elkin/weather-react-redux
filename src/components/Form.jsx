import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../features/api/asyncWeatherAction.js";
import {weather_cache_time} from "../utils/constants.js";

const Form = () => {
    const dispatch = useDispatch();
    const {timestamp, city: name} = useSelector(state => state.weatherInfo);

    const handleClickGetWeather = e => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        if (city !== name || Date.now() - timestamp > weather_cache_time) {
           dispatch(fetchWeather(city));
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