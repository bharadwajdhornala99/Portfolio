// File: src/components/Header.tsx

const Header = () => {
    return (
      <header className="w-full fixed top-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 tracking-wide cursor-pointer" style={{ fontFamily: '"Bradley Hand", "Bradley Hand ITC", cursive' }}>
  Bharadwaj Dhornala</h1>

  
          {/* Navigation Links */}
          <nav className="space-x-6 hidden md:flex">
            <a href="#hero" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 font-medium">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-blue-600 font-medium">Education</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 font-medium">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 font-medium">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  