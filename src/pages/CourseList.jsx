import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CourseList = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Available Courses
      </Heading>
      {}
      <Box mb={4}>
        <Heading as="h2" size="md">
          Course 1
        </Heading>
        <Text>Course description goes here</Text>
        <Link to="/course/1">
          <Button mt={2}>View Details</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CourseList;
