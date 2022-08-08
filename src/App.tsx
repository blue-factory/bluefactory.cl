import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Box height="100vh">
        <Layout>
          <Routings />
        </Layout>
      </Box>
    </Router>
  </ChakraProvider>
);

export default App;
