import { Styles } from "@chakra-ui/theme-tools";
import "@fontsource/poppins";
export const styles: Styles = {
  global: {
    body: {
      fontFamily: "Poppins",
      color: "black",
      bg: "white",
      fontcolor: "black",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
    },
  },
};
