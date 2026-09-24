import React, { useState } from 'react'
import { SpringBootLogo, ApiServerIcon } from './TechLogos'

export default function SpringSection() {
  const [activeArea, setActiveArea] = useState('ioc')

  const learningAreas = {
    ioc: {
      id: 'ioc',
      title: 'Inversion of Control (IoC)',
      status: 'CURRENT LEARNING',
      desc: 'Letting the Spring container manage object lifecycles and dependency injection rather than manually instantiating classes with new.',
      points: [
        '@Component & @Service: Marking domain classes as Spring-managed beans',
        '@Autowired / Constructor Injection: Providing required dependencies automatically',
        'Decoupling: Swapping mock dependencies during testing with zero production code changes',
      ],
      code: `@Service
public class StudentQuizService {
    private final QuizRepository quizRepository;

    // Constructor-based Dependency Injection
    public StudentQuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public QuizSummary calculateScore(Long studentId) {
        return quizRepository.findSummaryByStudentId(studentId);
    }
}`,
    },
    rest: {
      id: 'rest',
      title: 'RESTful API Design',
      status: 'CURRENT LEARNING',
      desc: 'Mapping HTTP requests to controller methods, validating incoming JSON payloads, and returning standard HTTP status codes.',
      points: [
        '@RestController & @RequestMapping: Routing endpoint paths cleanly',
        '@GetMapping & @PostMapping: Binding specific HTTP verb semantics',
        'ResponseEntity<T>: Explicit control over HTTP status codes (200, 201, 404, 500)',
      ],
      code: `@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourse(@PathVariable Long id) {
        return courseService.findById(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }
}`,
    },
    system: {
      id: 'system',
      title: 'System Design Fundamentals',
      status: 'CONCEPT STUDY',
      desc: 'Studying how web applications scale from a single monolithic server to multi-tier architectures.',
      points: [
        'Client-Server Model: Clear boundaries between presentation and persistence',
        'Statelessness: Keeping sessions decoupled from server memory for horizontal scale',
        'Database Caching: Understanding where bottlenecks occur and how indexes help',
      ],
      code: `/* High-Level Architecture Flow:
 * Client (Browser / Android)
 *   ↓ HTTP/JSON (REST)
 * Reverse Proxy / Vercel
 *   ↓ Secure Network Boundary
 * Spring Boot Application Server (@Service Layer)
 *   ↓ Parameterized JDBC / JPA
 * Relational Database (PostgreSQL / SQL)
 */`,
    },
  }

  const current = learningAreas[activeArea]

  return (
    <section id="spring" className="spring-section" aria-label="Spring Boot and Backend Horizon">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">06 // EXPANDING HORIZONS</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">CURRENT LEARNING</span>
        </div>

        {/* Section Header */}
        <div className="spring-header-block">
          <div className="spring-badge-line">
            <SpringBootLogo size={20} color="#6db33f" />
            <span>ENTERPRISE BACKEND ARCHITECTURE</span>
          </div>

          <h2 className="spring-section-title">
            SPRING BOOT &amp; <span className="text-spring-accent">BACKEND SYSTEMS.</span>
          </h2>
          <p className="spring-section-subtitle">
            Currently learning enterprise application frameworks and service design.
            Exploring how Java applications orchestrate business logic, handle concurrency, and serve scalable REST APIs.
          </p>
        </div>

        {/* Learning Areas Tabs */}
        <div className="spring-tabs-row" role="tablist">
          {Object.keys(learningAreas).map((k) => {
            const item = learningAreas[k]
            const isActive = activeArea === k
            return (
              <button
                key={k}
                role="tab"
                aria-selected={isActive}
                className={`spring-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveArea(k)}
              >
                <span className="spring-dot" />
                <span className="spring-tab-name">{item.title}</span>
                <span className="spring-tab-chip">{item.status}</span>
              </button>
            )
          })}
        </div>

        {/* Active Horizon Inspection Card */}
        <div className="spring-inspection-card">
          <div className="spring-card-info">
            <div className="card-top-meta">
              <span className="horizon-tag">ACTIVE LEARNING TOPIC</span>
              <span className="horizon-chip">{current.status}</span>
            </div>

            <h3 className="horizon-title">{current.title}</h3>
            <p className="horizon-desc">{current.desc}</p>

            <div className="horizon-points-list">
              {current.points.map((pt) => (
                <div key={pt} className="horizon-pt-row">
                  <span className="horizon-bullet">&bull;</span>
                  <span className="horizon-pt-text">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="spring-card-code">
            <div className="spring-editor-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="editor-file-title">Spring_{current.id.toUpperCase()}.java</span>
            </div>

            <pre className="spring-code-pre">
              <code>{current.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
