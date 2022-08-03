import { useState } from "react";
import Nav from "./components/Nav/Nav";
import NavMenu from "./components/Nav/NavMenu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Hero from "./pages/Hero/Hero";
//import Skills from "./pages/Skills/Skills";

function App() {

  const [navOn,setNavOn] = useState(false);

  const onClickNav = () => {
    setNavOn(!navOn);
  }

  return (
    <div className="container">
      <Nav onClick={onClickNav} isVisible={!navOn}/>
      { navOn && <NavMenu onClick={onClickNav}/>}
      <Hero/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
