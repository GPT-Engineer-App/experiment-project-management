@RestController
@RequestMapping("/api/experiments")
public class ExperimentController {
    @Autowired
    private ExperimentService experimentService;

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return experimentService.getAllCourses();
    }

    @GetMapping("/courses/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return experimentService.getCourseById(id);
    }

    @PostMapping
    public Experiment createExperiment(@RequestBody Experiment experiment) {
        return experimentService.createExperiment(experiment);
    }

    @PutMapping("/{id}")
    public Experiment updateExperiment(@PathVariable Long id, @RequestBody Experiment experimentDetails) {
        return experimentService.updateExperiment(id, experimentDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteExperiment(@PathVariable Long id) {
        experimentService.deleteExperiment(id);
    }

    @GetMapping("/export/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=experiments.xlsx";
        response.setHeader(headerKey, headerValue);

        List<Experiment> experiments = experimentRepository.findAll();

        ExperimentExcelExporter excelExporter = new ExperimentExcelExporter(experiments);
        excelExporter.export(response);
    }
}