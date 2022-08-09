import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const SectionOne = () => {
  return (
    <Container maxW="3xl">
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight="120%"
        >
          Desarrollo de <br />
          <Text as="span" color="first">
            software a medida
          </Text>
          &nbsp;y reclutamiento de{" "}
          <Text as="span" color="third">
            talentos
          </Text>
        </Heading>
        <Text color="gray.500">
          Creemos que la fusión de metodologías ágiles, tecnologías, UI/UX y el
          foco en nuestros clientes, es la fórmula ideal para resolver cualquier
          problema.
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="blue"
            bg="first"
            rounded="full"
            px={6}
            _hover={{
              bg: "second",
            }}
          >
            Contactar
          </Button>

          <Image width={200} src="/assets/scroll.gif" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default SectionOne;
