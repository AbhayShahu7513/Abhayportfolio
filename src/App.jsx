/* src/App.jsx */
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Services from './sections/Services'
import Experience from './sections/Experience'
import Stats from './sections/Stats'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App