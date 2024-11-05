import { Box, Stack } from "@chakra-ui/react"
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Navigation } from "../constant";

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar data={Navigation} />
            <Stack mt={60} gap="5rem" flex="1">
                {children}
            </Stack>
            <Footer />
        </Box>
    );
}

export default Layout;
