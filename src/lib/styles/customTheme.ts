import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    first: "#3C70B4",
    second: "#423E37",
    third: "#E3B23C",
    fourth: "#EDEBD7",
  },
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config: {
    initialColorMode: "light",
  },
});
