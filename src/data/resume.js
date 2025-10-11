const resume = {
  name: 'Mahesh Bongani',
  title: 'Senior Software Engineer | Full-Stack | .NET | Data Engineering',
  contact: {
    phone: '+1-470-662-xxxx',
    email: 'mahesh.bongani1+ghportfolio@gmail.com',
    linkedin: 'https://www.linkedin.com/in/maheshbongani/'
  },
  socials: {
    twitter: 'https://x.com/IamMaheshB',
    linkedin: 'https://www.linkedin.com/in/maheshbongani/',
    github: 'https://github.com/MaheshB0ngani',
    stackoverflow: 'https://stackoverflow.com/users/6160525/mahesh-bongani',
    email: 'mailto:mahesh.bongani1+ghportfolio@gmail.com'
  },
  summary:
    'With over 11 years of experience in software engineering, I deliver high-performance, scalable, and reliable systems across full-stack development, data engineering, and cloud infrastructure.',
  profile:
    'Seasoned Software Engineer with 11+ years of hands-on experience building scalable, distributed systems and full-stack applications across AdTech, FinTech, and Healthcare domains. Strong expertise in backend development using .NET Core, Kafka, and Microservices architecture, alongside strong capabilities in Data Engineering using Scala, Python, Spark, Apache Hudi, and Apache Airflow on AWS.',
  skills: {
    primary: ['C#.NET', '.NET Core', 'Web APIs', 'Microservices', 'Docker', 'Kubernetes', 'Kafka'],
    frontend: ['VueJS', 'Angular', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    databases: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    dataEngineering: ['Scala', 'Python', 'Spark', 'Apache Hudi', 'Airflow', 'EMR', 'Glue'],
    devops: ['Terraform', 'AWS', 'TeamCity', 'Octopus', 'GitHub Actions']
  },
  experience: [
    {
      company: 'Cardlytics, Inc.',
      period: 'April 2019 – Present',
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
  }
}

export default resume
