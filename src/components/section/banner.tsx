import {
    Stack,
    Center,
    Button,
    InputGroup,
    Input,
    InputRightElement,
    InputLeftElement,
    Spinner,
    useToast
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Search2Icon } from "@chakra-ui/icons";
import { CardWeather } from "../card";
import { fetchWeather, setCity } from "../../redux/weatherSlice";
import { useEffect, useState } from "react";

const Banner = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const [hasSearch, setHasSearch] = useState<boolean>(false)
    const city = useSelector((state: any) => state.weather.city);
    const data = useSelector((state: any) => state.weather.data);
    const units = useSelector((state: any) => state.weather.units);
    const loading = useSelector((state: any) => state.weather.loading);
    const error = useSelector((state: any) => state.weather.error);
    const baseImageURL = import.meta.env.VITE_BASE_IMAGE_URI;
    const date = new Date().toLocaleString();

    useEffect(() => {
        if(error && hasSearch) {
            toast({
                title: "Please Search Valid City",
                status: "error",
                description: error,
                isClosable: true,
            });
        }
    }, [error, hasSearch])

    const handleSearch = () => {
        setHasSearch(true)
        dispatch(fetchWeather(city));
    };

    return (
        <Center m={10}>
            <Stack minW={"40%"}>
                <InputGroup>
                    <InputLeftElement>
                        <Search2Icon />
                    </InputLeftElement>
                    <Input
                        borderColor="black"
                        value={city}
                        onChange={(e) => dispatch(setCity(e.target.value))}
                        pr="4.5rem"
                        type="text"
                        placeholder="Search City"
                    />
                    <InputRightElement width="10vh">
                        <Button colorScheme="blue" h="1.75rem" size="sm" onClick={handleSearch}>
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>
                {loading ? (
                    <Spinner role="status"/>
                ) : (
                    data && (
                        <CardWeather
                            location={data.name}
                            temp={data.main.temp}
                            humidity={data.main.humidity}
                            wind={data.wind.speed}
                            visibility={data.visibility}
                            pressure={data.main.pressure}
                            feelsLike={data.main.feels_like}
                            weather={data.weather[0].description}
                            icon={`${baseImageURL}${data.weather[0].icon}.png`}
                            unit={units}
                            date={date}
                        />
                    )
                )}
            </Stack>
        </Center>
    );
};

export default Banner;
