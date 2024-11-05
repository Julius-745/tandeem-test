import { FaLocationDot } from "react-icons/fa6";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { Card, Text, Stack, Heading, HStack, Box, Image, Tooltip, Flex} from "@chakra-ui/react"

export interface IWheater {
    location: string;
    temp: string;
    humidity: string;
    wind: string;
    date: string;
    visibility: number;
    pressure: string;
    feelsLike: string;
    unit: string;
    weather: string;
    icon: string;
};

export const CardWeater = ({ location, temp, humidity, wind, date, visibility, pressure, unit, weather, icon, feelsLike }: IWheater) => {

    return (
        <Card 
            background={date.split(" ")[2] === "AM"
                ? "linear-gradient(135deg, #FFFDE4, #FFEA70)" 
                : "linear-gradient(135deg, #6D83F2, #A084CA)" 
            }
            boxShadow="-12px 14px 5px 0px rgba(0,0,0,1)"
            border="2vh"
            borderRadius={"2xl"}
            variant="outline" 
            minW={{ base: "60%", lg: "50%" }}
            pb={2}
        >
            <Stack margin={5} gap={10}>
                <Flex direction={{lg: "row", base: "column"}} justifyContent={"space-between"}>
                    <HStack>
                        <FaLocationDot/>
                        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight={"bold"}>{location}</Text>
                        <Tooltip label={weather}>
                            <Image src={icon} alt="weather"/>
                        </Tooltip>
                    </HStack>
                    <Text mt={{lg: 4, base: 1}} fontSize={{ base: "sm", md: "md" }}>{date}</Text>
                </Flex>
                <HStack alignSelf={"center"}>
                    <Stack>
                        <HStack>
                            <Heading fontWeight={"bold"} fontSize={{lg: "4rem", base: '3rem'}}>{temp}</Heading>
                            <Box mb={10}>
                                {unit === "metric" ?
                                    <TbTemperatureCelsius size={"1.5rem"}/>
                                    :
                                    <TbTemperatureFahrenheit size={"1.5rem"}/>
                                }
                            </Box>
                        </HStack>
                        <HStack display={"flex"} justifyContent={"center"}>
                                <Text color={"gray.600"} fontSize={"sm"} textAlign={"right"} as={"u"}> Feels like: {feelsLike}</Text>
                                <Box mb={2}>
                                    {unit === "metric" ?
                                        <TbTemperatureCelsius/>
                                        :
                                        <TbTemperatureFahrenheit/>
                                    }
                                </Box>
                        </HStack>
                    </Stack>
                </HStack>
                <Flex direction={{lg: "row", base: "column"}} justifyContent={"space-between"} gap={{base:2, lg: 10}} fontWeight={"600"}>
                    <Text>Humidity: {humidity}%</Text>
                    <Text>Wind: {wind} m/sec</Text>
                    <Text>Visibility: {visibility/1000} km</Text>
                    <Text>Pressure: {pressure} hPa</Text>
                </Flex>
            </Stack>
        </Card>
    );
};
