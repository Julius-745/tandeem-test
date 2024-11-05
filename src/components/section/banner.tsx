import { Stack, Center, Button, InputGroup, Input, InputRightElement, InputLeftElement, Spinner} from "@chakra-ui/react";
import { useFetchData } from "../../hooks/useFetchData";
import { Search2Icon } from "@chakra-ui/icons";
import { CardWeater } from "../card";



const Banner = () => {
    const {data, loading, setCity, fetchData} = useFetchData()
    const date = new Date().toJSON().slice(0, 10);

    return (
        <Center>
            <Stack>
                <InputGroup minW={"50vh"} >
                    <InputLeftElement>
                        <Search2Icon/>
                    </InputLeftElement>
                    <Input
                        borderColor={"black"}
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
                        wind={data.main.speed}
                        clouds={data.clouds.all}
                        pressure={data.main.pressure}
                        date={date}
                    />
                )
                }
            </Stack>
        </Center>
    )

}

export default Banner;