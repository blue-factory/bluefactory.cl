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
import { useTranslation } from "react-i18next";
import { AiFillCloud } from "react-icons/ai";
import { GiRadioTower } from "react-icons/gi";
import "../../../../i18n";

const SectionThree = () => {
  const { t } = useTranslation("Landing");

  return (
    <Box p={[0, 0, 4, 4]} m={10}>
      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize="3xl">{t("SectionThree.title")}</Heading>
      </Stack>

      <Container maxW="6xl" mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}>
          <HStack padding={["0", "5", "5", "5"]}>
            <Box color="first">
              <Icon as={AiFillCloud} w={10} h={10} />
            </Box>
            <VStack align="start">
              <Text fontWeight={600}>
                <Text as="span" color="first">
                  Cloud: &nbsp;
                </Text>
                {t("SectionThree.cloud")}
              </Text>
            </VStack>
          </HStack>

          <HStack pt={["10", "0", "0", "0"]}>
            <Box color="third">
              <Icon as={GiRadioTower} w={10} h={10} />
            </Box>
            <VStack align="start">
              <Text fontWeight={600}>
                <Text as="span" color="third">
                  IoT: &nbsp;
                </Text>
                {t("SectionThree.iot")}
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SectionThree;
