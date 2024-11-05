import { Container, Flex, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.png"

export const Footer = () => {
    return (
        <Container minW={"100%"} py={5} backgroundColor={"#051830"} px={10}>
        <Flex justifyContent={"space-between"} textAlign={"center"} alignItems={"center"} direction={{base:'column', md:'row'}} gap={5} >
              <Image
                mx={{ base: 0, md: 0, }}
                src={logo}
                alt={"Logo"}
                w={{ base: 24, md: "auto" }}
              />
            <Text color={"white"} textAlign={"center"}>Advance your life with comprehensive program together with Tandeem</Text>
            <Text fontSize={"12px"} color={"white"}>© Tandeem</Text>
        </Flex>
      </Container>
    )
}