import React, { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import favicon from "../public/favicon-o1-32.png";
import projects from "./projects.json";
const asset = (name) => `${import.meta.env.BASE_URL}${name}`;
const email = "sivamaddula@o1jobaid.com";
const navigation = [
  ["/", "Overview"],
  ["/profile", "Profile"],
  ["/o1jobaid", "O1JOBAID"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/education", "Education"],
  ["/courses", "Courses"],
  ["/contact", "Contact"],
];
function External({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
function Intro({ label, title, children }) {
  return (
    <div className="intro">
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}
const productContent = {
  overview: {
    headline: "Tools that keep your search moving",
    description:
      "O1JOBAID brings job matching, application preparation, and tracking together to help job seekers move forward.",
    contextLabel: "THE PRODUCT",
    context:
      "A connected workspace for finding opportunities and managing applications.",
    focusLabel: "THE PURPOSE",
    focus:
      "Reduce repetitive steps throughout the job search.",
    button: "Explore O1JOBAID",
    href: "https://o1jobaid.com",
  },

  founder: {
    headline: "Everything in one workflow",
    description:
      "I founded O1JOBAID to connect the fragmented parts of a job search from evaluating a role to preparing an application and following up.",
    contextLabel: "THE PROBLEM",
    context:
      "Career information and application activity get scattered across platforms.",
    focusLabel: "MY FOCUS",
    focus:
      "Bring those steps together through practical software and automation.",
    button: "See the product",
    href: "https://o1jobaid.com",
  },

  startup: {
    headline: "Track smarter, apply faster, and stay organized.",
    description:
      "Compare job fit, prepare tailored materials, autofill supported applications, and keep interview activity connected to each opportunity.",
    contextLabel: "APPLICATION SUPPORT",
    context:
      "Use saved profile information across matching and application workflows.",
    focusLabel: "SEARCH ORGANIZATION",
    focus:
      "Keep applications, interviews, and next steps together.",
    button: "Explore product features",
    href: "https://o1jobaid.com/features",
  },

  projects: {
    headline: "Built for the full job application workflow",
    description:
      "O1JOBAID is my founder project, bringing AI assisted preparation and application management into a connected product.",
    contextLabel: "PRODUCT CAPABILITIES",
    context:
      "Job matching, resume and cover letter tools, and browser extension autofill.",
    focusLabel: "WORKFLOW",
    focus:
      "Connect profile information with applications and interview tracking.",
    button: "View O1JOBAID",
    href: "https://o1jobaid.com/features",
  },
};

function Product({ variant = "overview" }) {
  const content =
    productContent[variant] ?? productContent.overview;

  return (
    <section className="product">
      <div>
        <span className="eyebrow">
          CURRENT FOCUS / O1JOBAID
        </span>

        <h2>{content.headline}</h2>

        <p>{content.description}</p>

        <External
          href={content.href}
          className="button light"
        >
          {content.button}
          <span aria-hidden="true">↗</span>
        </External>
      </div>

      <div className="product-note">
        <span>{content.contextLabel}</span>
        <p>{content.context}</p>

        <hr />

        <span>{content.focusLabel}</span>
        <p>{content.focus}</p>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">
            <i /> FOUNDER & ENGINEER
          </span>
          <h1>
            Building tools.
            <br />
            Giving people
            <br />
            <em>their time back.</em>
          </h1>
          <p className="lead">
            I’m Sai Siva Reddy Maddula, founder of O1JOBAID. I build software at
            the intersection of AI, automation, and the job search.
          </p>
          <div className="actions">
            <External href="https://o1jobaid.com" className="button">
              What I’m building <span>↗</span>
            </External>
            <Link to="/o1jobaid" className="text-link">
              The founder story →
            </Link>
          </div>
        </div>
        <figure>
          <img
            src={asset("portrait.webp")}
            alt="Sai Siva Reddy Maddula at graduation"
            width="900"
            height="1100"
            fetchPriority="high"
          />
          <figcaption>
            <strong>Sai Siva Reddy Maddula</strong>
            <span>Founder, O1JOBAID</span>
          </figcaption>
        </figure>
      </section>
      <div className="proof">
        <div>
          <strong>Computer Science</strong>
          <span>M.S. · Auburn University at Montgomery</span>
        </div>
        <div>
          <strong>Full-stack development</strong>
          <span>React · Python · PostgreSQL</span>
        </div>
        <div>
          <strong>Applied machine learning</strong>
          <span>Classification · Neural networks · Fairness</span>
        </div>
      </div>
      <Product variant="overview" />
      <section className="section">
        <div className="section-heading">
          <h2>From idea to implementation.</h2>
          <Link to="/projects" className="text-link">
            Explore projects →
          </Link>
        </div>
        <div className="grid three">
          {[
            [
              "01",
              "Software engineering",
              "Responsive interfaces, backend systems, and databases that turn product ideas into practical tools.",
            ],
            [
              "02",
              "Machine learning",
              "Hands on work with classification, regression, transfer learning, and responsible model evaluation.",
            ],
            [
              "03",
              "Automation",
              "A focus on finding repetitive workflows and making them simpler through software.",
            ],
          ].map(([n, t, d]) => (
            <article className="card" key={n}>
              <span className="number">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
function Startup() {
  return (
    <>
      <Intro
        label="FOUNDER & ENGINEER / O1JOBAID"
        title="One place for the next career move."
      >
        I founded O1JOBAID to make the job search more organized and reduce the
        work people repeat with every application.
      </Intro>
   
      <Product variant="startup" />
      <section className="section">
        <div className="section-heading">
          <h2>A connected job search workflow.</h2>
          <External className="text-link" href="https://o1jobaid.com/features">
            Explore product features ↗
          </External>
        </div>
        <div className="grid three">
          {[
            [
              "Find the fit",
              "Compare roles against profile details and identify gaps in job requirements.",
            ],
            [
              "Prepare & apply",
              "Create resumes and cover letters, then autofill supported applications through a Chrome extension.",
            ],
            [
              "Keep momentum",
              "Track applications and interviews together, with company and sponsorship information close at hand.",
            ],
          ].map(([t, d]) => (
            <article className="card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="card">
        <span className="eyebrow">MY FOCUS AS A FOUNDER</span>
        <h2>Make the workflow simpler.</h2>
        <p>
          I’m focused on turning repetitive job-search steps into useful
          software, drawing on my background in computer science, web
          development, and machine learning.
        </p>
        <Link to="/contact" className="text-link">
          Talk about O1JOBAID →
        </Link>
      </section>
    </>
  );
}
function Profile() {
  return (
    <>
      <Intro label="PROFILE" title="An engineer with a founder’s focus.">
        I’m interested in useful technology: software that solves a concrete
        problem and saves people time.
      </Intro>
      <div className="grid two section">
        <article className="card">
          <h2>Why I’m building O1JOBAID</h2>
          <p>
            Job seekers repeat the same tasks across different platforms:
            searching for roles, organizing applications, and adapting their
            materials. I believe software can take on more of that work.
          </p>
          <p>
            My goal is to help people spend more time finding the right
            opportunities and preparing for interviews.
          </p>
          <Link className="text-link" to="/contact">
            Start a conversation →
          </Link>
        </article>
        <article className="card">
          <h2>Technical foundation</h2>
          <p>
            My background spans electrical engineering and a master’s in
            computer science, with hands-on work in web development, machine
            learning, data processing, and algorithms.
          </p>
          <dl>
            <dt>Languages</dt>
            <dd>English, Spanish, Hindi, Telugu</dd>
            <dt>Interests</dt>
            <dd>AI, automation, career technology, SaaS</dd>
          </dl>
          <a
            className="text-link"
            href={asset("myResume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume ↗
          </a>
        </article>
      </div>
      <Product variant="founder" />
    </>
  );
}
function Projects() {
  return (
    <>
      <Intro label="SELECTED WORK" title="Built to learn. Building to help.">
        A founder project and a selection of hands on engineering work.
      </Intro>
      <Product variant="projects" />
      <section className="section">
        <div className="section-heading">
          <h2>Machine learning notebooks</h2>
          <span>06 / SELECTED PROJECTS</span>
        </div>
        <div className="grid two">
          {projects.map((p, i) => (
            <External key={p.url} href={p.url} className="card project">
              <span className="number">0{i + 1} / MACHINE LEARNING</span>
              <h3>{p.title} ↗</h3>
              <p>
                Open the original Google Colab notebook to explore the
                implementation.
              </p>
            </External>
          ))}
        </div>
      </section>
      <article className="card">
        <span className="eyebrow">HARDWARE & SOFTWARE</span>
        <h2>Fire detection system</h2>
        <p>
          An Arduino-based project combining flame and smoke sensors with buzzer
          and LED alerts, plus Python serial monitoring.
        </p>
        <div className="tags">
          {["Arduino", "C++", "Python", "Sensors"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </article>
    </>
  );
}
const skillGroups = [
  [
    "Frontend",
    ["React", "Next.js", "JavaScript", "HTML", "CSS", "Responsive design"],
  ],
  ["Backend & data", ["Python", "C++", "PostgreSQL", "Alembic", "Docker"]],
  [
    "Machine learning",
    [
      "Scikit-learn",
      "NumPy",
      "Classification",
      "Regression",
      "Neural networks",
    ],
  ],
  [
    "Foundations",
    [
      "Data structures & algorithms",
      "Regular expressions",
      "DFA & NFA",
      "Geometry",
    ],
  ],
];
function Skills() {
  return (
    <>
      <Intro label="CAPABILITIES" title="A practical engineering toolkit.">
        From responsive interfaces to data pipelines and machine learning
        models.
      </Intro>
      <div className="grid two section">
        {skillGroups.map(([title, tags]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <div className="tags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <Link to="/projects" className="button">
        See the work <span>→</span>
      </Link>
    </>
  );
}
const education = [
  [
    "2022 — 2024",
    "Master of Science · Computer Science",
    "Auburn University at Montgomery",
    "Montgomery, Alabama · CGPA 3.83",
    "Web development, machine learning, database management, data analysis, algorithms, automata theory, and 3D modeling.",
  ],
  [
    "2018 — 2022",
    "Bachelor of Technology · Electrical & Electronics Engineering",
    "Vasireddy Venkatadri Institute of Technology",
    "India · CGPA 3.41",
    "Circuit analysis, control systems, digital logic, C programming, neural networks, and microprocessor programming.",
  ],
  [
    "2016 — 2018",
    "Mathematics, Physics & Chemistry",
    "Narayana Junior College",
    "India · CGPA 3.91",
    "",
  ],
  [
    "2013 — 2016",
    "School education",
    "Sri Chaitanya School",
    "India · CGPA 3.97",
    "",
  ],
];
function Education() {
  return (
    <>
      <Intro label="EDUCATION" title="Engineering, from circuits to software.">
        An interdisciplinary foundation for building practical technology.
      </Intro>
      <div className="timeline section">
        {education.map(([date, title, school, meta, desc]) => (
          <article key={school}>
            <span className="eyebrow">{date}</span>
            <div>
              <h2>{title}</h2>
              <h3>{school}</h3>
              <p className="muted">{meta}</p>
              {desc && <p>{desc}</p>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
const courses = [
  [
    "Machine Learning Crash Course",
    "Regression, classification, numerical and categorical data, generalization, neural networks, embeddings, LLMs, production ML, AutoML, fairness, problem framing, and project management.",
  ],
  [
    "Python · W3Schools",
    "Data types, control flow, functions, object-oriented programming, files, modules, exceptions, regular expressions, and database interactions.",
  ],
  [
    "HTML, CSS & JavaScript · W3Schools",
    "Semantic HTML, responsive design, Flexbox, Grid, DOM manipulation, ES6, events, and asynchronous programming.",
  ],
  [
    "NumPy · W3Schools",
    "Array indexing and reshaping, broadcasting, vectorized operations, statistics, linear algebra, and random number generation.",
  ],
  [
    "Data Structures & Algorithms",
    "Arrays, linked lists, stacks, queues, trees, graphs, hash tables, sorting, searching, recursion, dynamic programming, BFS, and DFS.",
  ],
];
function Courses() {
  return (
    <>
      <Intro label="CONTINUOUS LEARNING" title="Foundations put into practice.">
        Coursework supporting my work in software development and applied AI.
      </Intro>
      <div className="course-list section">
        {courses.map(([t, d], i) => (
          <article className="card" key={t}>
            <span className="number">0{i + 1}</span>
            <div>
              <h2>{t}</h2>
              <p>{d}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
function Contact() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <Intro label="CONTACT" title="Let’s build something useful.">
        For conversations about O1JOBAID, engineering, or collaboration, get in
        touch.
      </Intro>
      <div className="grid two section">
        <div className="contact-details">
          <h2>Say hello.</h2>
          <a href={`mailto:${email}`}>{email}</a>
          <a href="tel:+13614881962">+1 (361) 488-1962</a>
          <External href="https://www.linkedin.com/in/sai-siva-reddy-m-964504224/">
            Connect on LinkedIn ↗
          </External>
          <p>
            Prefer a direct email? Use the address above, or prepare a message
            here.
          </p>
        </div>
        <form
          className="card"
          onSubmit={(e) => {
            e.preventDefault();
            const d = new FormData(e.currentTarget);
            window.location.href = `mailto:${email}?subject=${encodeURIComponent("Portfolio inquiry from " + d.get("name"))}&body=${encodeURIComponent(d.get("message") + "\n\n" + d.get("name") + "\n" + d.get("email"))}`;
            setReady(true);
          }}
        >
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength="120"
          />
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <label htmlFor="message">What would you like to discuss?</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            maxLength="3000"
          />
          <button className="button" type="submit">
            Prepare email <span>↗</span>
          </button>
          <p className="form-note" role="status">
            {ready
              ? "Your email app was requested. Review and send your message there. If it did not open, email me directly using the address on this page."
              : "Opens your email app. You review and send the message."}
          </p>
        </form>
      </div>
    </>
  );
}
function App() {
  const location = useLocation(),
    main = useRef(null);
  useEffect(() => {
    const label =
      navigation.find(([p]) => p === location.pathname)?.[1] ||
      "Page not found";
    document.title = `${label} | Sai Siva Reddy Maddula`;
    main.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    //window.scrollTo(0, 0);
    //main.current?.focus();
  }, [location.pathname]);
  return (
    <>
      <a
        className="skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to content
      </a>
      <header>
        <Link to="/" className="brand" aria-label="Sai Siva Reddy Maddula home">
          <img src={favicon} alt="" width={24} height={24} />
        </Link>
        <nav aria-label="Main navigation">
          {navigation.map(([path, label]) => (
            <NavLink key={path} to={path} end={path === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main" ref={main} tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o1jobaid" element={<Startup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire" element={<Navigate to="/contact" replace />} />
          <Route
            path="*"
            element={
              <>
                <Intro label="404" title="This page isn’t here." />
                <Link to="/" className="button">
                  Back to overview →
                </Link>
              </>
            }
          />
        </Routes>
      </main>
      <footer>
        <div>
          <strong>Sai Siva Reddy Maddula</strong>
          <span>Building with purpose.</span>
        </div>
        <div>
          <External href="https://www.linkedin.com/in/sai-siva-reddy-m-964504224/">
            LinkedIn ↗
          </External>
          <External href="https://x.com/saisiva_maddula?s=21">X ↗</External>
          <a href={`mailto:${email}`}>Email ↗</a>
        </div>
      </footer>
    </>
  );
}

export default App;
