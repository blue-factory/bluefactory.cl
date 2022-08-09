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
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SectionThree = () => {
  return (
    <Box p={4} m={4}>
      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize="3xl">Diseño, software e ingeniería</Heading>
      </Stack>

      <Container maxW="6xl" mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}>
          <HStack padding={["0", "5", "5", "5"]}>
            <Box color="defiForPeople" px={2}>
              <Icon as={FavoriteIcon} />
            </Box>
            <VStack align="start">
              <Text color="gray.600" textAlign="justify">
                adsfkjds a;flkjadsf ;lsdflkajsdf; lkdsaf adsf;lkjdsf iejrasdlj
              </Text>
            </VStack>
          </HStack>

          <HStack pt={["10", "0", "0"]} paddingLeft={["0", "5", "5", "5"]}>
            <Box color="defiForPeople" px={2}>
              <Icon as={EmojiEventsIcon} />
            </Box>
            <VStack align="start">
              <Text color="gray.600">
                aldsfjldaskfj aldsfjkads;flkjdsa ad;lfkj asd
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SectionThree;
