import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import "../../../../i18n";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="lg"
      p={8}
      rounded="xl"
      align="center"
      pos="relative"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h3" fontSize="xl">
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign="center"
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize="sm"
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align="center" mt={8} direction="column">
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align="center">
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

const SectionFour = () => {
  const { t } = useTranslation("Landing");

  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW="6xl" py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center">
          <Heading>{t("SectionFour.title")}</Heading>
          <Text>{t("SectionFour.description")}</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {t("SectionFour.entelTitle")}
              </TestimonialHeading>
              <TestimonialText>
                {t("SectionFour.entelDescription")}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="https://pbs.twimg.com/profile_images/1037868632741740544/y0wXgRlA_400x400.jpg"
              name="Entel Ocean"
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>{t("SectionFour.xTitle")}</TestimonialHeading>
              <TestimonialText>{t("SectionFour.xDescription")}</TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="https://pbs.twimg.com/profile_images/1012362101510160384/EjayQ10E_400x400.jpg"
              name="Mr X"
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionFour;
