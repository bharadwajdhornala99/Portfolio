// File: src/components/Experience.tsx
import AnimatedSection from './AnimatedSection';

const experienceData = [
  {
    title: 'Research Assistant',
    company: 'UNC Charlotte, US',
    period: 'Aug 2024 – Dec 2024',
    points: [
      'Prototyped an LLM-based model with LangChain and FAISS, analyzing 10K+ athlete records to improve training outcomes.',
      'Enabled interactive querying via LLM-driven interfaces for real-time performance analysis.',
      'Conducted Python and SQL-based data cleaning, raising data accuracy by 50%.',
      'Published performance dashboards in Tableau, enabling coaches to monitor 20+ KPIs.'
    ]
  },
  {
    title: 'Senior Data Analyst',
    company: 'Accenture, India',
    period: 'Aug 2020 – Aug 2023',
    points: [
      'Analyzed 75M+ records from Snowflake, AWS Athena, and Azure Databricks to uncover trends, patterns, and actionable insights, reducing report generation time by 50%.',
      'Designed 10+ dashboards in Tableau, Power BI, and Looker for real-time tracking of KPIs, reducing manual reporting by 70%.',
      'Automated the extraction of web-based data from 10+ sources using Selenium and ingested into AWS S3, improving data availability for reporting and reducing manual data collection effort by 60%.',
      'Built scalable ETL workflows using PySpark, Azure Data Factory, and Airflow to process structured/unstructured data from Azure Blob Storage, Snowflake, and PostgreSQL, ensuring 98% data quality.',
      'Managed workflow orchestration and pipeline monitoring in Airflow, improving reliability and reducing failures by 35%.',
      'Collaborated cross-functionally with teams to manage 50+ Git version-controlled scripts, implemented A/B testing and statistical models, followed Agile and CI/CD practices using Jenkins and Docker.',
      'Built web applications using Django and FastAPI with JavaScript front-end to improve user interaction and streamline reporting.'
    ]
  },
  {
    title: 'Research Analyst',
    company: 'Accenture Innovation Hub, India',
    period: 'Jan 2020 - Aug 2020',
    points: [
      'Engineered a deep learning pipeline using TensorFlow to convert hand-drawn sketches into 3D mesh models, achieving over 90% reconstruction accuracy.',
      'Designed a multi-stage process to transform sketches into 2.5D maps, enabling more accurate extraction for real-time rendering.',
      'Preprocessed and augmented 75K+ image samples, presented live demo performance, and co-authored a published research paper on sketch-based 3D generation.'
    ]
  },
  {
    title: 'Data Quality Analyst',
    company: 'CapGuide, India',
    period: 'Aug 2019 - Dec 2019',
    points: [
      'Developed a Python-based data cleansing algorithm to convert 32k+ unstructured raw data into structured formats, improving accuracy and enabling seamless NoSQL integration.',
      'Partnered with 3+ internal teams to resolve data quality issues, align with business objectives, and maintained data dashboards with Tableau and Power BI.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 border-b border-blue-200 pb-2 w-fit">Experience</h2>
        <div className="space-y-12">
          {experienceData.map((exp, i) => (
            <AnimatedSection key={i} delay={i}>
              <div className="md:grid md:grid-cols-5 gap-6 items-start bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                <div className="md:col-span-1 mb-4 md:mb-0 text-sm font-medium text-gray-500">
                  {exp.period}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 mb-3">{exp.company}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm leading-relaxed">
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
