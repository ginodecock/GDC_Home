
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-title">
                Electronics Design & <span className="highlight">IoT Solutions</span>
              </h1>
              <p className="hero-subtitle">
                G-DC provides cutting-edge electronics design, embedded systems, and privacy-centric Edge AI integrations. We turn complex problems into reliable, local-first technological realities.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View Our Projects <ArrowRight size={18} />
                </a>
                <a href="#expertise" className="btn btn-secondary">
                  Our Expertise
                </a>
              </div>
            </motion.div>
          </div>
          <div className="hero-visual">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-card"
            >
              <div className="circuit-pattern"></div>
              <div className="hero-card-content">
                <div className="tag">Privacy by Design</div>
                <h3>Edge AI Fall Detection</h3>
                <p>Sensor fusion and pose estimation for real-time safety, processed 100% locally.</p>
                <a href="https://www.elektormagazine.com/labs/fallguard-privacy-centric-fall-detection-through-edge-ai-and-sensor-fusion" target="_blank" className="learn-more">
                  Learn about FallGuard <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
