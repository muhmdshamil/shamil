import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />
      <main>
        <About />
        <Banner />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
