// File: src/components/Education.tsx
import AnimatedSection from './AnimatedSection';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 border-b border-blue-200 pb-2 w-fit">Education</h2>
        <AnimatedSection delay={0}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Master of Science</h3>
              <p className="text-blue-600 text-sm mb-2">Computer Science</p>
              <p className="text-sm text-gray-500 mb-2">University of North Carolina at Charlotte, NC</p>
              <p className="text-sm text-gray-400 mb-4">Aug 2023 - Dec 2024</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Focused on data analytics, machine learning, AI systems, and scalable cloud architectures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Bachelor of Technology</h3>
              <p className="text-blue-600 text-sm mb-2">Computer Science</p>
              <p className="text-sm text-gray-500 mb-2">Indian Institute of Information Technology, India</p>
              <p className="text-sm text-gray-400 mb-4">Jun 2016 - Jul 2020</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developed solid foundations in algorithms, DBMS, operating systems, and data structures.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1}>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Certifications</h3>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <p className="text-blue-700 font-medium">Microsoft Certified: Power BI Data Analyst Associate</p>
              <p className="text-sm text-gray-600">Expertise in visualizing and analyzing data to deliver business insights.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;
