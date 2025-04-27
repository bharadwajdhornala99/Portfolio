import { useEffect, useState } from 'react';

const sections = ['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element && scrollPosition >= element.offsetTop) {
          setActive(section);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Bharadwaj</h1>
        <ul className="flex space-x-4 text-sm font-medium text-gray-600">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className={`hover:text-blue-600 transition ${
                  active === section ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
