import { Grid } from "@chakra-ui/react";

import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

const Landing = () => {
  return (
    <Grid>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Grid>
  );
};

export default Landing;
