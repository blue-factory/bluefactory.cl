import { Button, Text } from "@chakra-ui/react";
// eslint-disable-next-line import/order
import { useTranslation } from "react-i18next";
import "../../i18n";

const LanguageToogle = () => {
  const { i18n } = useTranslation("connectWallet");

  const handleLanguageChange = () => {
    // eslint-disable-next-line no-console

    if (i18n.language === "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <Button onClick={handleLanguageChange}>
      <Text fontSize={30}>{i18n.language === "en" ? "🇺🇸" : "🇪🇸"}</Text>
    </Button>
  );
};

export default LanguageToogle;
