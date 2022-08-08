import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate("/");

  return (
    <Grid gap={4} textAlign="center">
      <Heading>Página no encontrada</Heading>

      <Box maxWidth={[280, 400]} marginX="auto">
        <Text fontSize={100}>🚫</Text>
      </Box>

      <Box>
        <Button onClick={handleBackToHome} marginTop={20}>
          Volver al inicio
        </Button>
      </Box>
    </Grid>
  );
};

export default Page404;
