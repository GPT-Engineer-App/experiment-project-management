import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const ExperimentProject = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Create Experiment Project
      </Heading>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl id="title" mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description</FormLabel>
          <Input type="text" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Create Project
        </Button>
      </form>
    </Box>
  );
};

export default ExperimentProject;
