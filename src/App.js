import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Services } from "./components/Services/Services";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { WorkExp } from "./components/WorkExp/WorkExp";
import { Education } from "./components/Education/Education";
import { Footer } from "./components/Footer/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <WorkExp />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
