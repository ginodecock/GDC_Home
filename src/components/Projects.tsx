
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FallGuard",
      tag: "Edge AI & Vision",
      desc: "Privacy-centric fall detection using local pose estimation and sensor fusion (radar + light) on STM32N6.",
      link: "https://www.elektormagazine.com/labs/fallguard-privacy-centric-fall-detection-through-edge-ai-and-sensor-fusion",
      tech: ["STM32N6", "SSD MobileNet", "MQTT", "Node-RED"]
    },
    {
      title: "Truck Dock Automation",
      tag: "Logistics IoT",
      desc: "BLE-enabled loading bay automation using Time-of-Flight sensors for precise docking and safety management.",
      link: "https://www.elektormagazine.com/labs/truck-dock-automation",
      tech: ["STM32WB", "BLE", "ToF Sensor", "MIT App Inventor"]
    },
    {
      title: "Tesla Blinker Control",
      tag: "Gesture UI",
      desc: "Retrofitting gesture-based blinker controls for Tesla Model 3 Highland using high-speed 8x8 ToF grid sensing.",
      link: "https://www.elektormagazine.com/labs/tesla-blinker",
      tech: ["STM32F4", "VL53L7CX", "30Hz Grid Sensing"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world applications of advanced embedded technology.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <span className="project-tag">{project.tag}</span>
                <a href={project.link} target="_blank" className="project-link">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-item">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a href="https://github.com/ginodecock?tab=repositories" target="_blank" className="btn btn-outline">
            <Github size={18} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
