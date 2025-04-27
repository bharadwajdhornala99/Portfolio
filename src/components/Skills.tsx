// File: src/components/Skills.tsx
import AnimatedSection from './AnimatedSection';

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'SQL', 'R', 'Java']
  },
  {
    category: 'Database Technologies',
    skills: ['Snowflake', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle']
  },
  {
    category: 'Cloud Platforms',
    skills: ['AWS', 'Azure', 'GCP']
  },
  {
    category: 'Machine Learning & AI',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'LLMs', 'NLP']
  },
  {
    category: 'Data Engineering',
    skills: ['Airflow', 'Apache Spark', 'Kafka', 'Hadoop', 'ETL Pipelines']
  },
  {
    category: 'Visualization Tools',
    skills: ['Tableau', 'Power BI', 'Looker']
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['Docker', 'Jenkins', 'Git', 'GitHub Actions']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 border-b border-blue-200 pb-2 w-fit">Skills</h2>
        <AnimatedSection delay={0}>
          <div className="space-y-10">
            {skillGroups.map((group, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-600 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
