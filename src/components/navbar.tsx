import { useTranslation } from "react-i18next";
import { INavigation } from "../constant";
import logo from "../assets/logo.png"
import { Box, Center, Container, HStack, Stack, Divider, Image, Link, Text, Flex  } from "@chakra-ui/react";
import MenuDrawer from "./menu-drawer";
import { Link as URI } from "react-router-dom";

interface INavbar {
    data: INavigation[];
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
        <Link key={idx} href={item.link} _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="lg"
            fontWeight={"bold"}
          >
            {item.name}
          </Text>
        </Link>
        )
      })}
    </>
  );
};


export const Navbar: React.FC<INavbar> = ({data}) => {
  const { t } = useTranslation();

    return (
        <Center>
      <Stack
        as={"nav"}
        w={"full"}
        position={"absolute"}
        mt={5}
        top={"0"}
        justifyContent={"center"}
      >
        <Container minW={"100%"} px={10}>
          <Box display={"flex"} alignItems={"center"} minW={"100%"}>
            <Flex
              flexDir={"row"}
              justifyContent={{ base: "start", lg: "space-between" }}
              flex={1}
            >
              <HStack marginRight={"2rem"}>
                <URI to={"/"}>
                <Image
                  mx={{ base: 4, lg: 0 }}
                  src={logo}
                  alt={"Logo"}
                  w={{ base: 24, lg: "auto" }}
                />
                </URI>
              </HStack>
              <HStack gap={10}>
                <MenuList data={data} />
              </HStack>
            </Flex>
            <MenuDrawer>
              <MenuList data={data} />
            </MenuDrawer>
          </Box>
        </Container>
        <Divider size={"lg"} backgroundColor={"#BAD6FB"} height={0.5} orientation="horizontal" variant={"solid"} mt={5}/>
      </Stack>
    </Center>
    )
}