const resume = {
  name: 'Mahesh Bongani',
  title: 'Senior Software Engineer | Full-Stack | .NET | Data Engineering',
  contact: {
    phone: '+1-470-662-xxxx',
    email: 'mahesh.bongani1+portfolio@gmail.com',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/in/mahesh-bongani/',
    twitter: 'https://x.com/IamMaheshB',
    github: 'https://github.com/MaheshB0ngani',
    stackoverflow: 'https://stackoverflow.com/users/6160525/mahesh-bongani',
  },
  summary:
    'Senior Software Engineer with 11+ years building scalable, reliable, high performance, distributed, event driven systems across backend (.NET), data engineering (Scala, Spark, Hudi, Airflow on AWS), and frontends (React/Angular/Vue) across both on-premise and cloud environments. Passionate about performance, reliability, and developer experience.',
  profile:
    'I deliver end-to-end solutions from building microservices and creating User Interfaces to data pipelines and cloud infrastructure, leading POCs, mentoring teams, and driving architecture decisions for high-impact projects.',
  skills: {
    primary: [
      { icon: 'fas fa-hashtag', label: 'C#.NET' },
      { icon: 'fas fa-code', label: '.NET Core' },
      { icon: 'fas fa-plug', label: 'Web APIs' },
      { icon: 'fas fa-cubes', label: 'Microservices' },
      { icon: 'fas fa-code', label: 'Scala' },
      { icon: 'fab fa-docker', label: 'Docker' },
      { icon: 'fas fa-project-diagram', label: 'Kubernetes' },
      { icon: 'fas fa-stream', label: 'Kafka' },
      { icon: 'fas fa-tools', label: 'Terraform' },
      { icon: 'fab fa-aws', label: 'AWS' },
    ],
    frontend: [
      { icon: 'fab fa-angular', label: 'Angular' },
      { icon: 'fab fa-react', label: 'React' },
      { icon: 'fab fa-vuejs', label: 'VueJS' },
      { icon: 'fab fa-js', label: 'JavaScript' },
      { icon: 'fas fa-code', label: 'TypeScript' },
      { icon: 'fab fa-html5', label: 'HTML' },
      { icon: 'fab fa-css3-alt', label: 'CSS' },
      { icon: 'fab fa-bootstrap', label: 'Bootstrap' },
    ],
    databases: [
      { icon: 'fas fa-database', label: 'SQL Server' },
      { icon: 'fas fa-database', label: 'PostgreSQL' },
      { icon: 'fas fa-leaf', label: 'MongoDB' },
      { icon: 'fas fa-bolt', label: 'Redis' },
      { icon: 'fas fa-search', label: 'Elasticsearch' },
    ],
    dataEngineering: [
      { icon: 'fas fa-fire', label: 'Spark' },
      { icon: 'fas fa-code', label: 'Scala' },
      { icon: 'fab fa-python', label: 'Python' },
      { icon: 'fas fa-layer-group', label: 'Apache Hudi' },
      { icon: 'fas fa-wind', label: 'Apache Airflow' },
      { icon: 'fas fa-cloud', label: 'EMR' },
      { icon: 'fas fa-paste', label: 'Glue' },
    ],
  },
  experience: [
    {
      company: 'Cardlytics, Inc.',
      period: 'April 2019 - Present',
      role: 'Senior Software Engineer',
      bullets: [
        'Developed scalable microservices using .NET Core, Scala, Java,  Kafka, MongoDB, and Redis, enabling real-time reward decisioning and high availability.',
        'Delivered full-stack features integrating Vue/React frontends with GraphQL and REST APIs for internal platforms.',
        'Led design and development of backend services and data pipelines processing 10M+ financial transactions daily, achieving end-to-end transaction ingestion to reward generation within 5 hours.',
        'Designed and optimized Apache Spark pipelines on AWS EMR and Glue, improving performance by 40% and reducing cloud costs by $8K/month.',
        'Implemented cost-optimized infrastructure-as-code using Terraform, Kubernetes, and AWS, improving deployment efficiency and scalability.',
        'Mentored junior engineers, led technical design sessions, and conducted POCs to validate architectural approaches and tools.',
        'Partnered with product owners to translate business needs into technical user stories, identify requirement gaps, and define implementation strategies.',
        'Contributed to core architecture, module scaffolding, and “happy path” flows to accelerate onboarding and delivery for new projects.'
      ]
    },
    {
      company: 'GGK Technologies (now ACS & Innova Solutions)',
      period: 'June 2014 - April 2019',
      role: 'Senior Software Engineer',
      bullets: [
        'Built logistics and healthcare systems using C# .NET, Web APIs, Windows Services, Angular, and SQL Server.',
        'Implemented schedulers, user management, alerts, and integration with external vendor APIs/FTP.'
      ]
    }
  ],
  projects: [
    {
      title: '» Core Data Platform & Rewards Management System',
      description:
        'Data pipelines and processes that import, clean, and process transactional data to generate rewards and reports. Technologies: Scala, Spark, Apache Hudi, Airflow, EMR, Glue.',
      links: { source: '', demo: '' },
      tags: ['Scala', 'Spark', 'Hudi', 'Airflow', 'AWS']
    },
    {
        title: '» Measurement (Partner Services):',
        description:
          'Partner services enable the system to create and manage cookies and tags installed on Advertisers and banks sites, tracking conversions, and facilitating audience generation and reporting. \nIt also supports and manages third-party tags from other ad ecosystem organizations.This system is a purely microservices-oriented, event-driven architecture deployed on AWS Cloud and Kubernetes Clusters.',
        links: { source: '', demo: '' },
        tags: ['.NET Core', 'Web APIs', 'Kafka', 'Redis', 'MongoDB', 'GraphQL', 'Vue.js']
    },
    {
      title: '» Purchase Graph & Merchant Location Cleaning',
      description:
        'Knowledge graph of categories, merchants and locations to clean and match transactions to store locations; improves accuracy of advertiser matching.',
      links: { source: '', demo: '' },
      tags: ['.NET Core', 'Kafka', 'Redis', 'ElasticSearch', 'ETL', 'Web APIs']
    },
    {
        title: '» IQSmarts (IntelliQuick delivery, A logistics company)',
        description:
        'IQSmarts system allows customers to place orders through different integration modes, which include ordering through a website as an individual single order or bulk orders as file uploads, API, or an FTP mode via JSON, XML, and CSV contract. Delivered cron-based schedulers to fetch data from external vendors’ API or FTP locations. Created user management and alerts & notification modules using C#, Angular, and SQL Server. Responsibilities: Writing business logic, unit and integration tests, and handling internal code reviews. Involved in the design and development of new requirements. Handled communication with clients and provided round-the-clock support.',
        links: { source: '', demo: '' },
        tags: ['C#.NET', 'Web APIs', 'Angular', 'SQL Server', 'Windows Services', 'Redis']
    },
    {
        title: '» Healthcare Products: CRUX & HCSC',
        description:
        'HCSC is a health insurance company in the United States and is the licensee of the Blue Cross Blue Shield (BCBS) Association of 5 states (IL, NM, TX, MT, OK). It offers various health and life insurance products. \n\nCrux is also a HealthCare suite, which we developed in-house from scratch. This product offers real-time integration of various enrollment channels and facilitates cost-effective execution of health plan operations. There are several modules developed in CRUX; below are a few of them.  \n\nI worked on multiple modules like Enrollment Processor, Rules Engine, Member Services, and Financial Transactions for billing. The Enrollment processor handles the saving of application data in the DBS related to the Enrollment and Membership modules. Rules Engine is a service where the application is validated with configurable rules for further processing. These can be categorized, customized, and turned off with configurations from the UI.',
        links: { source: '', demo: '' },
        tags: ['C#.NET', 'Web APIs', 'React', 'SQL Server', 'Windows Services', 'Redis']
    }
  ],
  education: {
    degree: 'Bachelors degree in Computer Science Engineering',
    school: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), JNTU-H',
    years: '2010 - 2014'
  },
  whatIDo: {
    title: 'What I do',
    subtitle: 'A full stack developer who wants to explore every tech stack',
    bullets: [
      {
        subject: 'Backend Engineering',
        points: [
          'Designed and optimized .NET Core microservices, reducing API response times by 40%.',
          'Improved application throughput to handle 3x more concurrent requests without scaling hardware.'
        ],
        techIcons: [
            // { icon: 'fas fa-hashtag', label: 'C#.NET' },
        ]
      },
      {
        subject: 'Data Engineering',
        points: [
          'Built scalable pipelines using Scala, Apache Spark, Apache Hudi, AWS S3, Glue, EMR, and Airflow.',
          'Cut data processing times from 6 hours to under 2 hours, enabling near real-time analytics.',
          'Reduced storage costs by 30% via optimized Hudi compaction and S3 data lifecycle policies.'
        ],
        techIcons: [            
            // { icon: 'fab fa-angular', label: 'Angular' },
        ]
      },
      {
        subject: 'Frontend Development',
        points: [
          'Delivered responsive, high-traffic web apps in Angular, React & Vue.js with <1 second load time for critical pages.'
        ],
        techIcons: [            
            // { icon: 'fab fa-angular', label: 'Angular' },
        ]
      },
      {
        subject: 'Cloud & DevOps',
        points: [
          'Automated AWS infrastructure with Terraform, reducing deployment cycles from 2 days to under 2 hours.',
          'Migrated on-prem workloads to AWS EKS, cutting operational overhead by 50%.',
          'Built CI/CD pipelines (TeamCity, Octopus), enabling daily deployments with zero downtime.'
        ],
        techIcons: [            
            // { icon: 'fab fa-angular', label: 'Angular' },
        ]
      },
      {
        subject: 'Modern Ecosystem & Architecture',
        points: [
          'Developed Kafka-based event-driven systems processing millions of events/day.',
          'Integrated Redis, MongoDB, Elasticsearch, and GraphQL (HotChocolate) for high-performance data access.'
        ],
        techIcons: [            
            // { icon: 'fab fa-angular', label: 'Angular' },
        ]
      }
    ],
    illustration: ``
  },
  proficiency: [
    { label: 'Backend', value: 90 },
    { label: 'Frontend', value: 75 },
    { label: 'Data Engineering', value: 70 },
    { label: 'Cloud & DevOps', value: 70 },
  ]
}

export default resume
