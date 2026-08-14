import { useEffect } from "react";
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
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      "[data-reveal], [data-timeline-item], [data-credential-reveal]"
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    revealElements.forEach((element) => {
      const bounds = element.getBoundingClientRect();

      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        element.classList.add("is-visible");
      }
    });

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.14 }
    );

    revealElements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

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
