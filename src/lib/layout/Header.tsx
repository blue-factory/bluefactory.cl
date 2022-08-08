import { Box, Flex } from "@chakra-ui/react";

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
      <Box marginLeft="auto">
        <LanguageToogle />
      </Box>
    </Flex>
  );
};

export default Header;
