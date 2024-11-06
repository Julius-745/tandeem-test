import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setCity, setUnits } from "../redux/weatherSlice";

export const useFetchData = () => {
    const dispatch = useDispatch();
    
    const { data, units, city, loading, error } = useSelector((state: any) => state.weather);

    const fetchData = () => {
        dispatch(fetchWeather(city));
    };

    useEffect(() => {
        fetchData();
    }, [city, dispatch]);

    return {
        data,
        units,
        loading,
        error,
        city,
        fetchData,
        setCity: (newCity: string) => dispatch(setCity(newCity)),
        setUnits: (newUnits: string) => dispatch(setUnits(newUnits)),
    };
};
