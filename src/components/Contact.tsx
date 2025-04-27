// File: src/components/Contact.tsx
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <AnimatedSection delay={0}>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Me</h2>
          <p className="text-gray-600 mb-10">
            Let’s connect! I’m open to collaborations, hiring, and exciting data projects.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={1}>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg shadow-md p-9 border border-gray-200 hover:shadow-lg transition-shadow">
              <p className="text-blue-700 font-medium mb-1">Email</p>
              <p className="text-gray-700">dhornalabharadwaj@gmail.com</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <p className="text-blue-700 font-medium mb-1">Phone</p>
              <p className="text-gray-700">+1 7043095830</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <p className="text-blue-700 font-medium mb-1">LinkedIn</p>
              <a href="https://www.linkedin.com/in/bharadwajd/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                linkedin.com/in/bharadwaj-dhornala
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
