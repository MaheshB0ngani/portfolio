const resume = {
  name: 'Mahesh Bongani',
  title: 'Senior Software Engineer | Full-Stack | .NET | Data Engineering',
  contact: {
    phone: '+1-470-662-xxxx',
    email: 'mahesh.bongani1@gmail.com',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/in/mahesh-bongani/',
    twitter: 'https://x.com/IamMaheshB',
    github: 'https://github.com/MaheshB0ngani',
    stackoverflow: 'https://stackoverflow.com/users/6160525/mahesh-bongani',
  },
  summary:
    'Senior Software Engineer with 11+ years building scalable, distributed, event driven systems across backend (.NET), data engineering (Scala, Spark, Hudi, Airflow on AWS), and frontends (React/Angular/Vue). Passionate about performance, reliability, and developer experience.',
  profile:
    'I deliver end-to-end solutions from building microservices and creating User Interfaces to data pipelines and cloud infrastructure, leading POCs, mentoring teams, and driving architecture decisions for high-impact projects.',
  skills: {
    primary: [
      'C#.NET',
      '.NET Core',
      'Web APIs',
      'Microservices',
      'Scala',
      'Docker',
      'Kubernetes',
      'Kafka',
      'Terraform',
      'AWS',
    ],
    frontend: ['Angular', 'React', 'VueJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
    databases: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    dataEngineering: ['Spark', 'Scala', 'Python', 'Apache Hudi', 'Apache Airflow', 'EMR', 'Glue'],
  },
  experience: [
    {
      company: 'Cardlytics, Inc.',
      period: 'April 2019 - Present',
      role: 'Senior Software Engineer',
      bullets: [
        'Developed scalable microservices using .NET Core, Scala, Kafka, MongoDB, and Redis for real-time reward decisioning.',
        'Built data pipelines processing 10M+ financial transactions daily; optimized Spark pipelines to improve performance by 40% and reduce costs.',
        'Implemented infrastructure-as-code with Terraform and Kubernetes; improved deployment efficiency and scalability.'
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
      title: 'Core Data Platform & Rewards Management System',
      description:
        'Data pipelines and processes that import, clean, and process transactional data to generate rewards and reports. Technologies: Scala, Spark, Apache Hudi, Airflow, EMR, Glue.',
      links: { source: '', demo: '' },
      tags: ['Scala', 'Spark', 'Hudi', 'Airflow', 'AWS']
    },
    {
      title: 'Purchase Graph & Merchant Location Cleaning',
      description:
        'Knowledge graph of categories, merchants and locations to clean and match transactions to store locations; improves accuracy of advertiser matching.',
      links: { source: '', demo: '' },
      tags: ['Graph', 'ETL', 'Data Quality']
    }
  ],
  education: {
    degree: 'B.Tech in Computer Science Engineering',
    school: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), JNTU-H',
    years: '2010 - 2014'
  },
  whatIDo: {
    title: 'What I do',
    subtitle: 'A full stack developer who wants to explore every tech stack',
    // Font Awesome brand icons (fab) with labels
    techIcons: [
      { icon: 'fab fa-html5', label: 'html5' },
      { icon: 'fab fa-css3-alt', label: 'css3' },
      { icon: 'fab fa-sass', label: 'sass' },
      { icon: 'fab fa-js', label: 'javascript' },
      { icon: 'fab fa-react', label: 'react' },
      { icon: 'fab fa-node', label: 'nodejs' },
      { icon: 'fab fa-npm', label: 'npm' },
      { icon: 'fas fa-database', label: 'sql' },
      { icon: 'fab fa-aws', label: 'aws' },
      { icon: 'fab fa-python', label: 'python' },
      { icon: 'fab fa-docker', label: 'docker' },
      { icon: 'fas fa-fire-alt', label: 'firebase' },
    ],
    bullets: [
      {
        subject: 'Backend Engineering',
        points: [
          'Designed and optimized .NET Core microservices, reducing API response times by 40%.',
          'Improved application throughput to handle 3x more concurrent requests without scaling hardware.'
        ]
      },
      {
        subject: 'Data Engineering',
        points: [
          'Built scalable pipelines using Scala, Apache Spark, Apache Hudi, AWS S3, Glue, EMR, and Airflow.',
          'Cut data processing times from 6 hours to under 2 hours, enabling near real-time analytics.',
          'Reduced storage costs by 30% via optimized Hudi compaction and S3 data lifecycle policies.'
        ]
      },
      {
        subject: 'Frontend Development',
        points: [
          'Delivered responsive, high-traffic web apps in Angular, React & Vue.js with <1 second load time for critical pages.'
        ]
      },
      {
        subject: 'Cloud & DevOps',
        points: [
          'Automated AWS infrastructure with Terraform, reducing deployment cycles from 2 days to under 2 hours.',
          'Migrated on-prem workloads to AWS EKS, cutting operational overhead by 50%.',
          'Built CI/CD pipelines (TeamCity, Octopus), enabling daily deployments with zero downtime.'
        ]
      },
      {
        subject: 'Modern Ecosystem & Architecture',
        points: [
          'Developed Kafka-based event-driven systems processing millions of events/day.',
          'Integrated Redis, MongoDB, Elasticsearch, and GraphQL (HotChocolate) for high-performance data access.'
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
