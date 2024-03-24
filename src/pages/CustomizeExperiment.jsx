import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const CustomizeExperiment = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Customize Experiment
      </Heading>
      {}
      <Text mb={4}>Customize your experiment here...</Text>
      <Button onClick={() => console.log("Customize experiment")}>Customize</Button>
    </Box>
  );
};

export default CustomizeExperiment;
