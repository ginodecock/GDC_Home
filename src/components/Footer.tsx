
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="logo footer-logo">
              <img src="/logo.png" alt="G-DC Logo" className="logo-img footer-logo-img" />
            </div>
            <p className="footer-desc">
              Specializing in high-performance electronics design, IoT ecosystem architecture, and privacy-centric Edge AI.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-title">Connect</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ginodc/" target="_blank"><Linkedin size={20} /></a>
              <a href="https://github.com/ginodecock" target="_blank"><Github size={20} /></a>
              <a href="mailto:gino@g-dc.be"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} G-DC Electronics Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
