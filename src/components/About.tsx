// File: src/components/About.tsx
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection delay={0}>
          <h2 className="text-3xl font-bold mb-8 text-blue-700 border-b border-blue-200 pb-2 w-fit">About Me</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3 space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                I'm a passionate data analyst and AI specialist with extensive experience in transforming complex data into actionable insights. With a strong foundation in data modeling, reporting, and dashboard development, I help organizations make data-driven decisions.
              </p>
              <p>
                My expertise spans across various programming languages, databases, and cloud platforms. I'm skilled in Python, SQL, R, and Java, and have worked extensively with MySQL, Oracle, PostgreSQL, Snowflake, MongoDB, and Cassandra.
              </p>
              <p>
                I’ve automated data extraction processes, built scalable ETL workflows, and created dashboards for real-time insights. I'm always exploring new technologies to enhance my skills and deliver better results.
              </p>
              <div className="flex gap-4 text-blue-700">
                <a href="https://www.linkedin.com/in/bharadwaj-dhornala/" target="_blank"><FaLinkedin size={20} /></a>
                <a href="mailto:dhornalabharadwaj@gmail.com"><FaEnvelope size={20} /></a>
                <a href="tel:+17043095830"><FaPhone size={20} /></a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Quick Info</h3>
                <p className="text-sm text-gray-600 mb-2"><span className="text-blue-600 font-medium">Email:</span> dhornalabharadwaj@gmail.com</p>
                <p className="text-sm text-gray-600 mb-4"><span className="text-blue-600 font-medium">Phone:</span> +1 704-309-5830</p>
                <a href="/attached_assets/Bharadwaj-Dhornala-analyst.pdf" target="_blank" className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded shadow hover:bg-blue-600 transition">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
