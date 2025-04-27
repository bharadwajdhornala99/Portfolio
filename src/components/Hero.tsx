// File: src/components/Hero.tsx
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import profileImg from '/attached_assets/Pro.jpg';

const Hero = () => {
  return (
    <section id="hero" className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-10">
        {/* Left */}
        <div className="md:w-1/2">
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Data Analytics & AI</span>
          <h1 className="text-5xl font-extrabold mt-6 mb-3 text-blue-700 leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Bharadwaj Dhornala</span>
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Data Analyst & AI Specialist</h2>
          <p className="text-gray-600 mb-4">
            Experienced Data Analyst with 4.5+ years specializing in data modeling, reporting, and dashboard development using Python, SQL, Snowflake, and Tableau. Proficient in ETL workflows and cloud platforms like AWS and Azure.
          </p>

          <div className="flex gap-4 mb-6 text-blue-700 text-sm">
            <div className="flex items-center gap-2"><FaEnvelope /> dhornalabharadwaj@gmail.com</div>
            <div className="flex items-center gap-2"><FaPhone /> +1 704-309-5830</div>
          </div>

          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Get In Touch</a>
            <a href="#projects" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">View Projects</a>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="rounded-xl bg-gradient-to-br from-blue-200 to-blue-500 p-2 w-[300px] h-[500px] flex items-center justify-center shadow-xl">
          <img src={profileImg} alt="Bharadwaj Dhornala" className="rounded-lg object-cover h-full w-full" style={{ marginTop: "10px" }} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
