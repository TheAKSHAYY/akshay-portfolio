import React, { useState } from 'react'
import { JavaLogo } from './TechLogos'

export default function JavaSection() {
  const [activeConcept, setActiveConcept] = useState('oop')

  const concepts = {
    oop: {
      id: 'oop',
      title: 'Object-Oriented Programming',
      subtitle: 'Designing modular, maintainable, and extensible code',
      summary:
        'OOP is not just syntax—it is how real software systems model domain logic and separate responsibilities.',
      pillars: [
        { name: 'Encapsulation', desc: 'Protecting object internal state via private fields and controlled getters/methods.' },
        { name: 'Polymorphism', desc: 'Allowing different implementations behind clean shared interfaces.' },
        { name: 'Inheritance & Composition', desc: 'Favoring composition to assemble flexible capabilities without tight coupling.' },
        { name: 'Abstraction', desc: 'Hiding implementation complexity behind well-defined contractual boundaries.' },
      ],
      code: `// Polymorphic interface contract
public interface PaymentProcessor {
    PaymentResult process(PaymentRequest request);
}

// Concrete robust implementation
public class StandardPaymentProcessor implements PaymentProcessor {
    private final String merchantId;

    public StandardPaymentProcessor(String merchantId) {
        if (merchantId == null || merchantId.isBlank()) {
            throw new IllegalArgumentException("Merchant ID cannot be empty");
        }
        this.merchantId = merchantId;
    }

    @Override
    public PaymentResult process(PaymentRequest request) {
        // Enforcing domain constraints and encapsulation
        return new PaymentResult(true, "Processed order: " + request.orderId());
    }
}`,
    },
    collections: {
      id: 'collections',
      title: 'Java Collections Framework',
      subtitle: 'Selecting optimal memory layouts and algorithmic access patterns',
      summary:
        'Understanding time and space complexity trade-offs between linear lists, associative maps, and distinct sets.',
      pillars: [
        { name: 'ArrayList', desc: 'Contiguous array storage providing O(1) random index access; amortized O(1) appends.' },
        { name: 'HashMap', desc: 'Hash-bucket associative map with O(1) average lookup; handles collisions cleanly.' },
        { name: 'HashSet', desc: 'Backed by HashMap keys to guarantee item uniqueness in O(1) average time.' },
        { name: 'Iteration & Streams', desc: 'Clean traversal, filtering, and transformation using modern Java idioms.' },
      ],
      code: `import java.util.*;

public class StudentRegistry {
    // Dynamic array for ordered records
    private final List<String> studentList = new ArrayList<>();
    
    // Hash map for O(1) fast key-value lookups
    private final Map<String, Integer> scoreIndex = new HashMap<>();

    public void registerStudent(String rollNumber, int initialScore) {
        studentList.add(rollNumber);
        scoreIndex.put(rollNumber, initialScore);
    }

    public Optional<Integer> getScore(String rollNumber) {
        return Optional.ofNullable(scoreIndex.get(rollNumber));
    }
}`,
    },
    exceptions: {
      id: 'exceptions',
      title: 'Robust Exception Handling',
      subtitle: 'Defensive programming and safe resource management',
      summary:
        'Writing resilient Java software that handles runtime failures gracefully and closes system resources reliably.',
      pillars: [
        { name: 'Checked vs Unchecked', desc: 'Using RuntimeExceptions for programming defects and custom domain errors.' },
        { name: 'Try-with-Resources', desc: 'Automatic closure of AutoCloseable streams and database connections.' },
        { name: 'Defensive Validation', desc: 'Checking nulls, bounds, and preconditions at method entry points.' },
        { name: 'Preserving Stack Traces', desc: 'Chaining root causes to maintain clean debugging telemetry.' },
      ],
      code: `import java.io.*;

public class ConfigReader {
    // Try-with-resources ensures reader is closed even on exception
    public String loadConfiguration(String filePath) throws IOException {
        if (filePath == null) {
            throw new IllegalArgumentException("File path must not be null");
        }

        StringBuilder content = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append(System.lineSeparator());
            }
        }
        return content.toString();
    }
}`,
    },
    jdbc: {
      id: 'jdbc',
      title: 'JDBC & Data Persistence',
      subtitle: 'Bridging Java application logic with SQL databases',
      summary:
        'Executing secure, parameterized SQL queries from Java without SQL injection vulnerabilities.',
      pillars: [
        { name: 'PreparedStatements', desc: 'Preventing SQL injection via pre-compiled query parameter binding.' },
        { name: 'ResultSet Mapping', desc: 'Translating tabular SQL rows into strongly typed Java domain objects.' },
        { name: 'Connection Lifecycles', desc: 'Managing database connections, transactions, and commit/rollback boundaries.' },
        { name: 'Data Integrity', desc: 'Coordinating transactional consistency across multiple operations.' },
      ],
      code: `import java.sql.*;

public class UserDao {
    private final Connection connection;

    public UserDao(Connection connection) {
        this.connection = connection;
    }

    // Parameterized PreparedStatement eliminates SQL injection
    public boolean verifyUser(String username, String email) throws SQLException {
        String sql = "SELECT id FROM users WHERE username = ? AND email = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, username);
            pstmt.setString(2, email);
            try (ResultSet rs = pstmt.executeQuery()) {
                return rs.next(); // True if user exists
            }
        }
    }
}`,
    },
  }

  const current = concepts[activeConcept]

  return (
    <section id="java" className="java-section" aria-label="Java Core Language Focus">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">03 // PRIMARY DIRECTION</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">JAVA SPECIALIZATION</span>
        </div>

        {/* Section Header */}
        <div className="java-header-block">
          <div className="java-badge-row">
            <span className="java-badge-icon">
              <JavaLogo size={20} color="currentColor" />
            </span>
            <span className="java-badge-txt">PRIMARY PROGRAMMING LANGUAGE</span>
          </div>

          <h2 className="java-section-title">
            GOING DEEP INTO <span className="text-java-accent">JAVA.</span>
          </h2>
          <p className="java-section-subtitle">
            Committed to Java as my core foundation for backend engineering. Focused on
            object-oriented architecture, the Collections framework, memory management, and robust error handling.
          </p>
        </div>

        {/* Concept Selector Tabs */}
        <div className="java-tabs-row" role="tablist" aria-label="Java concepts">
          {Object.keys(concepts).map((key) => {
            const item = concepts[key]
            const isActive = activeConcept === key
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isActive}
                className={`java-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveConcept(key)}
              >
                <span className="tab-dot" />
                <span className="tab-title">{item.title}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Concept Showcase Card */}
        <div className="java-showcase-card">
          <div className="showcase-info-col">
            <div className="showcase-meta">
              <span className="concept-tag">CONCEPT ARCHITECTURE</span>
              <h3 className="concept-title">{current.title}</h3>
              <p className="concept-subtitle">{current.subtitle}</p>
            </div>

            <p className="concept-summary">{current.summary}</p>

            <div className="concept-pillars-list">
              {current.pillars.map((pillar) => (
                <div key={pillar.name} className="pillar-item">
                  <span className="pillar-bullet">&bull;</span>
                  <div className="pillar-content">
                    <strong className="pillar-name">{pillar.name}:</strong>
                    <span className="pillar-desc">{pillar.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Code Viewer */}
          <div className="showcase-code-col">
            <div className="code-editor-frame">
              <div className="editor-top-bar">
                <div className="editor-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="editor-filename">{current.id.toUpperCase()}_Demo.java</span>
                <span className="editor-lang-tag">Java 17+</span>
              </div>

              <pre className="code-pre">
                <code>{current.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
