import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const DataAnalysis = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Data Analysis
      </Heading>
      <Text mb={4}>Perform data analysis here...</Text>
      <Button onClick={() => console.log("Analyze data")}>Analyze Data</Button>
    </Box>
  );
};

export default DataAnalysis;
