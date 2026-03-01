import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
