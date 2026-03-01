
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <img src="/logo.png" alt="G-DC Logo" className="logo-img" />
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </nav>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
