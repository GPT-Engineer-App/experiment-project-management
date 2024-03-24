@GetMapping("/courses/student")
    public List<Course> getAvailableCourses() {
        return experimentService.getAvailableCourses();
    }

    @PostMapping("/courses/assign")
    public void assignCourseToEducator(@RequestBody CourseAssignment courseAssignment) {
        experimentService.assignCourseToEducator(courseAssignment);
    }

    @PostMapping("/projects")
    public void createExperimentProject(@RequestBody ExperimentProject experimentProject) {
        experimentService.createExperimentProject(experimentProject);
    }

    @GetMapping("/projects/student")
    public List<ExperimentProject> getExperimentProjects() {
        return experimentService.getExperimentProjects();
    }

    @PostMapping("/projects/customize")
    public void customizeExperimentProject(@RequestBody CustomExperimentProject customExperimentProject) {
        experimentService.customizeExperimentProject(customExperimentProject);
    }

    @GetMapping("/export/custom")
    public void exportCustomExperimentData(HttpServletResponse response) throws IOException {
        experimentService.exportCustomExperimentData(response);
    }

    @PostMapping("/analyze")
    public void analyzeData(@RequestBody DataAnalysisRequest dataAnalysisRequest) {
        experimentService.analyzeData(dataAnalysisRequest);
    }

    @GetMapping("/analysis-results")
    public DataAnalysisResult getAnalysisResults() {
        return experimentService.getAnalysisResults();
    }