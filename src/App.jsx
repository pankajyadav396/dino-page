import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About'
import Accordian from './components/Accordion'
import BackToTop from './components/Backtitop'
import Footer from './components/Footer'
import Header from './components/Header'
import Preloader from './components/Preloader'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Utilities from './components/Utilities'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Preloader />
      <BackToTop />
      <Header />
      <About />
      <Tokenomics />
      <Utilities />
      <Roadmap />
      <Accordian />
      <Footer />
    </>
  )
}

export default App
