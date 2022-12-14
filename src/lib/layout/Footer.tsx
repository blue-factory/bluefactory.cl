import { Flex, Image, Link, Text, VStack } from "@chakra-ui/react";

import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" p={5}>
      <VStack width="full" maxW="6xl">
        <Flex
          width="full"
          justifyContent={[
            "center",
            "center",
            "space-between",
            "space-between",
          ]}
          gridGap={2}
        >
          <Image
            h={20}
            src="/assets/bluefactory-isotipo.png"
            display={["none", "none", "block", "block"]}
          />

          <Flex>
            <Link href="https://github.com/blue-factory" isExternal padding={3}>
              <GithubLogo width={40} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/bluefactory-cl/about/"
              isExternal
              padding={3}
            >
              <LinkedInLogo width={40} />
            </Link>
          </Flex>
        </Flex>
        <Text fontSize="14"> BlueFactory ⓒ {new Date().getFullYear()}</Text>
      </VStack>
    </Flex>
  );
};

export default Footer;
