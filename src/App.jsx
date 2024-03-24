import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import CourseList from "./pages/CourseList";
import CourseDetails from "./pages/CourseDetails";
import ExperimentProject from "./pages/ExperimentProject";
import CustomizeExperiment from "./pages/CustomizeExperiment";
import DataAnalysis from "./pages/DataAnalysis";

function App() {
  return (
    <Router>
      <Box>
        <Navigation />
        <Box p={4}>
          <Routes>
            <Route exact path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/experiment-project" element={<ExperimentProject />} />
            <Route path="/customize-experiment" element={<CustomizeExperiment />} />
            <Route path="/data-analysis" element={<DataAnalysis />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
