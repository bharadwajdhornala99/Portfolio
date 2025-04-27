// File: src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Bharadwaj Dhornala. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
