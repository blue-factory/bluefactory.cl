import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";

const SectionTwo = () => {
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
            Tienes un desafiador proyecto a desarrollar y te gustaría llevarlo a
            cabo?
          </Text>

          <Button
            width={200}
            bg="first"
            rounded="full"
            color="white"
            _hover={{ bg: "third" }}
          >
            Vamos a conversar
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default SectionTwo;
