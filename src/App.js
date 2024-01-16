import SimpleBar from "simplebar-react";
import Tools from "./components/Tools";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import SocialMenu from "./components/SocialMenu";
import MobileSocialMenu from "./components/MobileSocialMenu";

import "simplebar/dist/simplebar.min.css";
import "./styles/App.css";

function App() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }} autoHide={false}>
      <main className="mx-auto max-w-7xl text-white relative flex justify-center items-center gap-32">
        <AboutMe />
        <SocialMenu />
        <MobileSocialMenu />
      </main>
      <Skills />
      <Tools />
    </SimpleBar>
  );
}

export default App;
