export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'Full-Stack' | 'Systems & AI' | 'Cloud & Backend'
  role: string
  timeline: string
  description: string
  highlights: string[]
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  architecture: {
    overview: string
    layers: { name: string; tech: string; description: string }[]
    metrics: { label: string; value: string }[]
  }
}

export interface Experience {
  id: string
  role: string
  company: string
  type: string
  location: string
  period: string
  description: string
  achievements: string[]
  skills: string[]
  badge?: string
}

export interface Leadership {
  id: string
  role: string
  organization: string
  location: string
  period: string
  certificate: string
  highlights: string[]
  skills: string[]
}

export interface Education {
  institution: string
  location: string
  degree: string
  grade: string
  period: string
  coursework: string[]
}

export interface CodeProblem {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
  description: string
  initialCode: string
  testCases: {
    input: string
    expectedOutput: string
    actualOutput?: string
  }[]
  executionLimits: {
    timeLimit: string
    memoryLimit: string
    container: string
    network: string
  }
  geminiHint: string
}

export const PERSONAL_INFO = {
  name: 'Aditya Raj',
  title: 'Full-Stack Software Engineer & Systems Developer',
  tagline: 'Engineering robust full-stack architectures, isolated sandboxes, and modern reactive web applications.',
  email: 'adityaraj.dev22@gmail.com',
  phone: '+91-9973212722',
  location: 'Ranchi, India',
  institute: 'Birla Institute of Technology (BIT), Mesra',
  degree: 'B.Tech in Mechanical Engineering (CGPA: 8.37 / 10.0)',
  github: 'https://github.com/Aditya5250',
  linkedin: 'https://linkedin.com/in/araaz5935',
  status: 'Open for SDE Roles & Internships',
  bio: 'Full-stack software developer with a strong foundation in Core Computer Science, systems programming, and modern reactive frameworks. Experienced in building production-ready Dockerized services, high-throughput REST APIs, and AI-integrated developer tools like JudgeX.',
  stats: [
    { label: 'Academic CGPA', value: '8.37', detail: 'BIT Mesra' },
    { label: 'REST APIs Built', value: '10+', detail: 'Microservices & Auth' },
    { label: 'Sandbox Isolation', value: 'Docker', detail: 'Secure C++ Execution' },
    { label: 'Leadership', value: 'Sergeant', detail: 'NCC B-Certificate' },
  ],
}

export const EDUCATION_DATA: Education = {
  institution: 'Birla Institute of Technology (BIT), Mesra',
  location: 'Ranchi, India',
  degree: 'Bachelor of Technology in Mechanical Engineering',
  grade: 'CGPA: 8.37 / 10.0',
  period: '2023 – Present',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'System Design Foundations',
  ],
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'algouniversity-sde',
    role: 'SDE Externship',
    company: 'AlgoUniversity',
    type: 'Externship / Software Engineering',
    location: 'Remote',
    period: 'Recent',
    description: 'Spearheaded full-stack development and cloud container infrastructure for JudgeX, an automated AI-powered online coding judge platform.',
    badge: 'Flagship Project: JudgeX',
    achievements: [
      'Engineered an end-to-end full-stack application for automated C++ code evaluation, implementing submission processing, secure execution, automated verdict generation, submission tracking, and leaderboard workflows.',
      'Designed and integrated 10+ RESTful APIs with MongoDB to support authentication, problem management, submissions, test cases, execution results, and core application workflows.',
      'Implemented Docker-based isolated execution for untrusted C++ submissions, applying network isolation and CPU/memory limits while handling compilation errors, runtime errors, and timeouts for reliable code evaluation.',
      'Developed a role-based Admin CMS with CRUD workflows for coding problems and test cases, and implemented JWT authentication with RBAC to enforce secure, role-specific authorization across user and administrative workflows.',
      'Debugged full-stack issues across React, Node.js, REST APIs, authentication, CORS, and MongoDB using Chrome DevTools, Postman, application logs, and systematic troubleshooting to improve reliability.',
      'Deployed and maintained Dockerized services using AWS EC2/ECR and Vercel, managing container images, environment configurations, and Linux-based server operations through SSH; used Git/GitHub for version control.',
      'Architected a modular application with 15+ reusable React components, custom hooks, and scalable backend services, and integrated Gemini AI through an external API to provide contextual coding hints within the application workflow.',
    ],
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
      'AWS EC2',
      'AWS ECR',
      'Vercel',
      'Gemini AI',
      'JWT / RBAC',
      'REST APIs',
      'Linux / SSH',
    ],
  },
]

export const LEADERSHIP_DATA: Leadership[] = [
  {
    id: 'ncc-sergeant',
    role: 'Sergeant (B Certificate) — Operational Command & Logistics',
    organization: 'National Cadet Corps (NCC)',
    location: 'Ranchi, India',
    period: '2023 – Present',
    certificate: 'B Certificate',
    highlights: [
      'Led and mentored a contingent of 20+ cadets, promoting teamwork and operational discipline to successfully execute coordinated field exercises.',
      'Coordinated logistics, drill planning, and resource allocation across multiple teams for battalion-level parades, ensuring reliable execution under strict operational timelines.',
      'Mentored junior cadets in drill procedures and leadership principles, strengthening collaboration, communication, and team readiness through structured guidance.',
    ],
    skills: ['Operational Command', 'Logistics Management', 'Team Mentorship', 'High-Pressure Execution', 'Discipline'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'judgex',
    title: 'JudgeX',
    subtitle: 'AI-Powered Online Coding Judge & Sandboxed Execution Platform',
    category: 'Systems & AI',
    role: 'Lead Full-Stack Engineer',
    timeline: 'AlgoUniversity Externship',
    description: 'An enterprise-grade online judge platform capable of safely compiling and executing untrusted C++ code inside isolated Docker containers with live verdict streaming, test case scoring, and Gemini AI contextual assistance.',
    highlights: [
      'Automated C++ evaluation engine with sub-second verdict dispatch and runtime telemetry.',
      'Docker containerized sandboxing enforcing CPU quotas, memory ceilings, and zero network access.',
      '10+ secure RESTful API endpoints with MongoDB persistence for problems, submissions, and leaderboards.',
      'Admin CMS with role-based access control (RBAC) and JWT security for managing problem banks and hidden testcases.',
      'Integrated Gemini AI model delivering intelligent, contextual debugging hints without revealing full solutions.',
      'Deployed resiliently on AWS EC2 & ECR container registry with client on Vercel.',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
      'AWS EC2',
      'AWS ECR',
      'Vercel',
      'Gemini AI',
      'JWT Auth',
      'C++',
    ],
    githubUrl: 'https://github.com/Aditya5250',
    liveUrl: 'https://github.com/Aditya5250',
    featured: true,
    architecture: {
      overview: 'Microservice-inspired architecture decoupling the reactive React frontend, RESTful orchestration API, and isolated Docker compilation workers.',
      layers: [
        {
          name: 'Presentation Layer',
          tech: 'React.js, Vite, Tailwind CSS',
          description: '15+ reusable components, custom hooks for submission lifecycle, syntax-highlighted code editor, and live verdict indicators.',
        },
        {
          name: 'API & Orchestration Layer',
          tech: 'Node.js, Express.js, JWT, RBAC',
          description: 'Stateless REST APIs handling authentication, submission queues, test case retrieval, and communication with Gemini AI.',
        },
        {
          name: 'Execution Sandbox Layer',
          tech: 'Docker, Linux cgroups, C++17',
          description: 'Spins ephemeral isolated containers with strict CPU/memory limits and disabled network sockets to evaluate untrusted code safely.',
        },
        {
          name: 'Persistence & Cloud',
          tech: 'MongoDB, AWS EC2, AWS ECR, Vercel',
          description: 'Document database for flexible problem schemas and submission logs, container images stored on AWS ECR and orchestrated on EC2.',
        },
      ],
      metrics: [
        { label: 'REST APIs', value: '10+' },
        { label: 'Modular Components', value: '15+' },
        { label: 'Container Isolation', value: '100% Air-Gapped' },
        { label: 'AI Hint Latency', value: '< 800ms' },
      ],
    },
  },
  {
    id: 'budget-tracker',
    title: 'Budget Tracker Web Application',
    subtitle: 'High-Throughput Full-Stack Financial Management System',
    category: 'Full-Stack',
    role: 'Full-Stack Developer',
    timeline: 'Independent Project',
    description: 'A full-stack financial transaction management application designed for high concurrency, reliable asynchronous operations, and performant SQL query throughput.',
    highlights: [
      'Engineered full-stack financial application with transactional integrity and real-time expense tracking.',
      'Designed REST APIs for transaction workflows and implemented JWT authentication with user-level authorization to enforce secure access.',
      'Optimized PostgreSQL query performance through deliberate schema indexing on user IDs, transaction timestamps, and category foreign keys.',
      'Mitigated race conditions and out-of-order state updates during rapid concurrent UI inputs using optimistic UI updates and cancelable promises.',
      'Responsive data visualizations showing spending velocity and category allocations.',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'SQL Indexing',
      'JWT Auth',
      'Tailwind CSS',
      'REST APIs',
    ],
    githubUrl: 'https://github.com/Aditya5250',
    liveUrl: 'https://github.com/Aditya5250',
    featured: true,
    architecture: {
      overview: 'ACID-compliant relational architecture prioritizing query speed, deterministic state management, and strict cryptographic authorization.',
      layers: [
        {
          name: 'Reactive Client',
          tech: 'React, Tailwind CSS, Async Workflows',
          description: 'State-driven transactions interface with optimistic balance updates and race-condition prevention mechanisms.',
        },
        {
          name: 'Backend Services',
          tech: 'Node.js, Express.js, JWT Auth',
          description: 'Role-guarded REST endpoints with comprehensive schema validation and token verification.',
        },
        {
          name: 'Relational Database',
          tech: 'PostgreSQL, B-Tree Indexes',
          description: 'Custom indexing on user_id, date, and category_id ensuring sub-10ms queries even across extensive transaction histories.',
        },
      ],
      metrics: [
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Query Latency', value: '< 15ms (Indexed)' },
        { label: 'Auth Standard', value: 'JWT Bearer' },
        { label: 'UI State Sync', value: 'Race-Proof' },
      ],
    },
  },
]

export const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    description: 'Core programming and query languages',
    skills: [
      { name: 'C++', level: 'Advanced', description: 'Competitive programming, systems logic, memory efficiency', tag: 'Core' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Async/Await, closures, DOM manipulation, modern ES syntax', tag: 'Full-Stack' },
      { name: 'Python', level: 'Proficient', description: 'Scripting, algorithmic prototyping, data handling', tag: 'Languages' },
      { name: 'SQL', level: 'Advanced', description: 'Complex joins, indexing, query optimization, DDL/DML', tag: 'Databases' },
    ],
  },
  {
    category: 'Core Computer Science',
    description: 'Foundational computer science principles',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Advanced', description: 'Graphs, Dynamic Programming, Trees, Heaps, Complexity Analysis', tag: 'Foundations' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', description: 'Encapsulation, Polymorphism, Inheritance, Clean Code', tag: 'Foundations' },
      { name: 'Database Management Systems (DBMS)', level: 'Advanced', description: 'ACID properties, Normalization, Transactions, B-Trees', tag: 'Foundations' },
      { name: 'Operating Systems', level: 'Proficient', description: 'Processes, Threads, Synchronization, Memory Management, Linux cgroups', tag: 'Systems' },
      { name: 'Computer Networks', level: 'Proficient', description: 'TCP/IP, HTTP/HTTPS, DNS, Sockets, CORS, REST protocols', tag: 'Systems' },
      { name: 'System Design', level: 'Proficient', description: 'Client-Server, Microservices, Caching, Load Balancing, Sandboxing', tag: 'Systems' },
    ],
  },
  {
    category: 'Frontend & UI Engineering',
    description: 'Modern reactive interfaces and state management',
    skills: [
      { name: 'React.js', level: 'Advanced', description: 'Hooks, state architecture, component modularity, performance', tag: 'Frontend' },
      { name: 'Vite', level: 'Advanced', description: 'Modern build pipelines, HMR, bundling optimization', tag: 'Frontend' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first styling, design systems, responsive layouts', tag: 'Frontend' },
      { name: 'Responsive Design', level: 'Advanced', description: 'Mobile-first UX, cross-browser compatibility, accessible UI', tag: 'Frontend' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Server architecture, authentication, and integration',
    skills: [
      { name: 'Node.js', level: 'Advanced', description: 'Event loop, non-blocking I/O, server-side runtime', tag: 'Backend' },
      { name: 'Express.js', level: 'Advanced', description: 'RESTful API routing, middleware architecture, error handling', tag: 'Backend' },
      { name: 'REST APIs', level: 'Advanced', description: 'API contract design, status codes, pagination, rate limiting', tag: 'Backend' },
      { name: 'JWT Authentication', level: 'Advanced', description: 'Stateless auth, token signing, refresh flows, secure storage', tag: 'Security' },
      { name: 'RBAC (Role-Based Access)', level: 'Proficient', description: 'Hierarchical permission enforcement, Admin CMS security', tag: 'Security' },
      { name: 'API Integration', level: 'Advanced', description: 'Gemini AI integration, third-party services, webhooks', tag: 'AI' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Relational and document storage solutions',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', description: 'Relational data modeling, foreign keys, query analysis', tag: 'Databases' },
      { name: 'MongoDB', level: 'Advanced', description: 'Document stores, aggregations, flexible schemas, indexing', tag: 'Databases' },
      { name: 'Schema Indexing', level: 'Proficient', description: 'B-Tree & composite index design for query optimization', tag: 'Databases' },
      { name: 'Database Design', level: 'Advanced', description: 'Entity-relationship modeling, data normalization', tag: 'Databases' },
    ],
  },
  {
    category: 'Cloud, DevOps & Tools',
    description: 'Containerization, cloud infrastructure, and workflows',
    skills: [
      { name: 'Docker', level: 'Advanced', description: 'Multi-stage builds, container isolation, resource limits', tag: 'DevOps' },
      { name: 'AWS EC2 & ECR', level: 'Proficient', description: 'Virtual server provisioning, container registry management', tag: 'Cloud' },
      { name: 'Vercel', level: 'Advanced', description: 'Continuous deployment, edge routing, static asset optimization', tag: 'Cloud' },
      { name: 'Linux / SSH', level: 'Proficient', description: 'Command-line administration, server monitoring, scripting', tag: 'DevOps' },
      { name: 'Git & GitHub', level: 'Advanced', description: 'Branching strategies, code review workflows, versioning', tag: 'Tools' },
      { name: 'Chrome DevTools', level: 'Advanced', description: 'Network profiling, memory leak tracking, console debugging', tag: 'Engineering' },
      { name: 'Postman & Thunder Client', level: 'Advanced', description: 'API testing, automated request collections, auth flows', tag: 'Engineering' },
    ],
  },
]

export const CODE_PROBLEMS: CodeProblem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum (O(N) Hash Table)',
    difficulty: 'Easy',
    category: 'Arrays & Hash Maps',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    initialCode: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> twoSum(const vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (seen.find(complement) != seen.end()) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    if (!result.empty()) {
        cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    }
    return 0;
}`,
    testCases: [
      { input: 'nums = [2, 7, 11, 15], target = 9', expectedOutput: '[0, 1]' },
      { input: 'nums = [3, 2, 4], target = 6', expectedOutput: '[1, 2]' },
      { input: 'nums = [3, 3], target = 6', expectedOutput: '[0, 1]' },
    ],
    executionLimits: {
      timeLimit: '2.0s',
      memoryLimit: '64MB',
      container: 'gcc:12-slim (Isolated)',
      network: 'Disabled (Air-Gapped)',
    },
    geminiHint: '💡 Gemini Hint: You can solve this in single pass O(N) time and O(N) space using an unordered_map to store the difference (target - current_num) alongside its index as you iterate through the list.',
  },
  {
    id: 'binary-search',
    title: 'Binary Search (O(log N))',
    difficulty: 'Easy',
    category: 'Algorithms & Divide/Conquer',
    description: 'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return -1.',
    initialCode: `#include <iostream>
#include <vector>

using namespace std;

int binarySearch(const vector<int>& nums, int target) {
    int low = 0;
    int high = nums.size() - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> nums = {-1, 0, 3, 5, 9, 12};
    int target = 9;
    cout << "Index: " << binarySearch(nums, target) << endl;
    return 0;
}`,
    testCases: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', expectedOutput: 'Index: 4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', expectedOutput: 'Index: -1' },
    ],
    executionLimits: {
      timeLimit: '1.0s',
      memoryLimit: '32MB',
      container: 'gcc:12-slim (Isolated)',
      network: 'Disabled (Air-Gapped)',
    },
    geminiHint: '💡 Gemini Hint: Always compute mid using `low + (high - low) / 2` instead of `(low + high) / 2` to prevent potential 32-bit integer overflow when high + low exceeds 2^31 - 1.',
  },
]
