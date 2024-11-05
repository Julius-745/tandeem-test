import { Stack, Center, Button, InputGroup, Input, InputRightElement, InputLeftElement, Spinner, useToast} from "@chakra-ui/react";
import { useFetchData } from "../../hooks/useFetchData";
import { Search2Icon } from "@chakra-ui/icons";
import { CardWeater } from "../card";



const Banner = () => {
    const {city, data, units, loading, setCity, fetchData} = useFetchData()
    const baseImageURL = import.meta.env.VITE_BASE_IMAGE_URI
    const date = new Date().toLocaleString();

    return (
        <Center m={10}>
            <Stack>
                <InputGroup>
                    <InputLeftElement>
                        <Search2Icon/>
                    </InputLeftElement>
                    <Input
                        borderColor={"black"}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        pr='4.5rem'
                        type={'text'}
                        placeholder='Search City'
                    />
                    <InputRightElement width='10vh'>
                        <Button colorScheme={"blue"} h='1.75rem' size='sm' onClick={() => fetchData()}>
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>
                {loading ? 
                    <Spinner/>
                :
                ( data &&
                    <CardWeater 
                        location={data.name } 
                        temp={data.main.temp} 
                        humidity={data.main.humidity} 
                        wind={data.wind.speed}
                        visibility={data.visibility}
                        pressure={data.main.pressure}
                        feelsLike={data.main.feels_like}
                        weather={data.weather[0].description}
                        icon={baseImageURL+data.weather[0].icon+".png"}
                        unit={units}
                        date={date}
                    />
                )
                }
            </Stack>
        </Center>
    )

}

export default Banner;