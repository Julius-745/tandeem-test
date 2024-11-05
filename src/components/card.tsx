import { Card, Text, Stack, Heading, HStack } from "@chakra-ui/react"

export interface IWheater {
    location: string;
    temp: string;
    humidity: string;
    wind: string;
    date: string;
    clouds: string;
    pressure: string;
};

export const CardWeater = ({location, temp, humidity, wind, date, clouds, pressure}: IWheater) => {
    return (
        <Card 
            backgroundColor={"white"} 
            boxShadow={"-12px 14px 5px 0px rgba(0,0,0,1)"} 
            border={1} borderColor={"black"} 
            variant={"outline"} 
            minW={{base: "60vh", lg: "60%"}}>
            <Stack margin={5}>
                <HStack>
                    <Text>{location}</Text>
                    <Text>{date}</Text>
                </HStack>
                <Heading color={"black"}>{temp}</Heading>
                <HStack>
                    <Text>{humidity}</Text>
                    <Text>{wind}</Text>
                    <Text>{clouds}</Text>
                    <Text>{pressure}</Text>
                </HStack>
            </Stack>
        </Card>
    )
}