import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import "../../../../i18n";

const SectionTwo = () => {
  const { t } = useTranslation("Landing");

  return (
    <Flex
      w="full"
      h="300px"
      backgroundImage="/assets/background-2.png"
      backgroundSize="cover"
      backgroundPosition="center center"
      textAlign="center"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack maxW="2xl" spacing={6} alignItems="center">
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            {t("SectionTwo.description")}
          </Text>

          <Button
            width={200}
            bg="first"
            rounded="full"
            color="white"
            _hover={{ bg: "third" }}
          >
            {t("SectionTwo.button")}
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default SectionTwo;
