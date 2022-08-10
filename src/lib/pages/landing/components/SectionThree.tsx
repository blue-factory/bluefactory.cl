import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { AiFillCloud } from "react-icons/ai";
import { GiRadioTower } from "react-icons/gi";

const SectionThree = () => {
  return (
    <Box p={4} m={10}>
      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize="3xl">Diseño, software e ingeniería</Heading>
      </Stack>

      <Container maxW="6xl" mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}>
          <HStack padding={["0", "5", "5", "5"]}>
            <Box color="first" px={2}>
              <Icon as={AiFillCloud} w={10} h={10} />
            </Box>
            <VStack align="start">
              <Text fontWeight={600}>
                <Text as="span" color="first">
                  Cloud: &nbsp;
                </Text>
                Desarrollo de proyectos en la nube, alta escalabilidad y
                seguridad
              </Text>
            </VStack>
          </HStack>

          <HStack pt={["10", "0", "0"]}>
            <Box color="third" px={2}>
              <Icon as={GiRadioTower} w={10} h={10} />
            </Box>
            <VStack align="start">
              <Text fontWeight={600}>
                <Text as="span" color="third">
                  IoT: &nbsp;
                </Text>
                Desarrollo de proyectos en el internet de las cosas (IoT),
                conexión de datos a la nube
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SectionThree;
