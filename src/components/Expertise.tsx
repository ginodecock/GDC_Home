
import { Cpu, Zap, Eye, Database, Radio, Code } from 'lucide-react';

const Expertise = () => {
  const skills = [
    {
      icon: <Cpu size={32} />,
      title: "Electronics Design",
      desc: "PCB layout, component selection, and rapid prototyping using STM32 ecosystem."
    },
    {
      icon: <Eye size={32} />,
      title: "Edge AI & Vision",
      desc: "Local neural network deployment, pose estimation, and sensor fusion for real-time analysis."
    },
    {
      icon: <Radio size={32} />,
      title: "IoT Connectivity",
      desc: "Robust communication using MQTT, BLE, and custom protocols for seamless device integration."
    },
    {
      icon: <Database size={32} />,
      title: "Data & Monitoring",
      desc: "End-to-end dashboards using Node-RED, InfluxDB, and Grafana for system health."
    },
    {
      icon: <Code size={32} />,
      title: "Embedded Systems",
      desc: "Optimized firmware development in C/C++, STM32duino, and Real-Time OS environments."
    },
    {
      icon: <Zap size={32} />,
      title: "Rapid Prototyping",
      desc: "From concept to functional prototype with focus on UX/UI and hardware reliability."
    }
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">Bridging the gap between hardware and intelligence.</p>
        </div>
        
        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-icon">{skill.icon}</div>
              <h3 className="expertise-title">{skill.title}</h3>
              <p className="expertise-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
