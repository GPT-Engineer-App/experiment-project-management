import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <Box>
      <Heading as="h1" mb={4}>
        Course Details
      </Heading>
      <Text>Course ID: {id}</Text>
      {}
      <Button mt={4} onClick={() => console.log("Assign course to educator")}>
        Assign to Educator
      </Button>
    </Box>
  );
};

export default CourseDetails;
