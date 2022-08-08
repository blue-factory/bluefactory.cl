import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto">
      <Flex wrap="wrap" minHeight="90vh">
        <Header />
        <Box width="full" as="main">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
