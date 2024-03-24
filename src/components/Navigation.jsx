import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex bg="gray.100" p={4} alignItems="center">
      <Box>
        <Link to="/">Course List</Link>
      </Box>
      <Spacer />
      <Box>
        <Link to="/experiment-project">
          <Button colorScheme="blue" mr={4}>
            Experiment Project
          </Button>
        </Link>
        <Link to="/data-analysis">
          <Button colorScheme="green">Data Analysis</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
