import "./styles/App.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import SocialMenu from "./components/SocialMenu";
import MobileSocialMenu from "./components/MobileSocialMenu";

function App() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }} autoHide={false}>
      <main className="px-10 sm:px-28 md:px-40 lg:px-52 pt-10 xl:pt-32 text-white relative">
        <p className="text-base">hello, I am</p>
        <h1 className="text-6xl sm:text-7xl mt-5 font-msmadi">Fatemeh Rasolzadeh</h1>
        <p className="mt-5 sm:mt-10 text-lg sm:text-xl font-verdana text-light-purple">Front-end developer, create user friendly website to help businesses do better online</p>
        <AboutMe />
        <Skills />
        <SocialMenu />
        <MobileSocialMenu />
      </main>
    </SimpleBar>
  );
}

export default App;
