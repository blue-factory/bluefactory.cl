import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import LanguageToogle from "./LanguageToogle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
      margin="8"
    >
      <Link to="/">
        <HStack align="center" justify="center">
          <Image width={8} src="/assets/bluefactory-isotipo.png" />
          <Image width={40} src="/assets/bluefactory-logotipo.png" />
        </HStack>
      </Link>

      <Box marginLeft="auto">
        <LanguageToogle />
      </Box>
    </Flex>
  );
};

export default Header;
