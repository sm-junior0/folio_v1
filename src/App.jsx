import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Navbar/>
        <Hero/>
        <Portfolio/>
        <Contact/>
        <About/>
        <Education/>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}