import { useState,useEffect } from "react";
import Nav from "./components/Nav/Nav";
import NavMenu from "./components/Nav/NavMenu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Hero from "./pages/Hero/Hero";
import { useTranslation } from "react-i18next";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills"
import Footer from "./components/Footer/Footer";
//import Skills from "./pages/Skills/Skills";

function App() {
  const { i18n } = useTranslation();

  const [navOn,setNavOn] = useState(false);
  const [legalOn,setLegalOn] = useState(false);

  const changeLanguageHandler = (lang) => {
      i18n.changeLanguage(lang);
  };

  const onClickNav = () => {
    setNavOn(!navOn);
  }

  return (
    <div className="container">
      <Nav onClick={onClickNav} isVisible={!navOn}/>
      { navOn && <NavMenu onClick={onClickNav} changeLanguageHandler={changeLanguageHandler}/>}
      <Hero/>
      <About/>
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
