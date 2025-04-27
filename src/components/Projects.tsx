// File: src/components/Projects.tsx

const projectList = [
  {
    title: 'Linked Insight',
    bullets: [
      "Built a LinkedIn screening tool using Python, Streamlit, and Ollama (Mistral), enabling AI-based evaluation of 1M+ profiles and reducing manual review time by 60%",
      "Processed synthetic candidate data on Snowflake and Azure Synapse, generated recruiter insights via Power BI dashboards"
    ]
  },
  {
    title: 'Flight Price Dashboard',
    bullets: [
      'Created interactive dashboards using Tableau and Power BI to analyze and predict airfare trends from Redshift and Snowflake, providing stakeholders with real-time insights and increasing forecast accuracy by 25%',
      "Automated ETL processes using Python, Azure Data Factory, and Airflow; optimized query performance in Teradata and Athena by 45%"

    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 border-b border-blue-200 w-fit pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((project, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {project.bullets.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
