import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import "../../../../i18n";

const SectionOne = () => {
  const { t } = useTranslation("Landing");

  return (
    <Container maxW="3xl">
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight="120%"
        >
          {t("SectionOne.develop")} <br />
          <Text as="span" color="first">
            {t("SectionOne.software")}
          </Text>
          {t("SectionOne.recruitment")}
          <Text as="span" color="third">
            {t("SectionOne.talents")}
          </Text>
        </Heading>
        <Text color="gray.500">{t("SectionOne.description")}</Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Link href="mailto:hola@bluefactory.cl" isExternal>
            <Button
              colorScheme="blue"
              bg="first"
              rounded="full"
              px={6}
              _hover={{
                bg: "second",
              }}
            >
              {t("SectionOne.button")}
            </Button>
          </Link>

          <Image width={[150, 150, 200, 200]} src="/assets/scroll.gif" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default SectionOne;
