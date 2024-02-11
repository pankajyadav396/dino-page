import './App.css'
import About from './components/About'
import Accordian from './components/Accordion'
import BackToTop from './components/Backtitop'
import Footer from './components/Footer'
import Header from './components/Header'
import Preloader from './components/Preloader'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Utilities from './components/Utilities'

function App() {
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
