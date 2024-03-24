@Service
public class ExperimentService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ExperimentRepository experimentRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + id));
    }

    public Experiment createExperiment(Experiment experiment) {
        return experimentRepository.save(experiment);
    }

    public Experiment updateExperiment(Long id, Experiment experimentDetails) {
        Experiment experiment = experimentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Experiment not found with id: " + id));
        experiment.setTitle(experimentDetails.getTitle());
        experiment.setType(experimentDetails.getType());
        return experimentRepository.save(experiment);
    }

    public void deleteExperiment(Long id) {
        Experiment experiment = experimentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Experiment not found with id: " + id));
        experimentRepository.delete(experiment);
    }
}