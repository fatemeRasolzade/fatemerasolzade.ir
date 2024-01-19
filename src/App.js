// import SimpleBar from "simplebar-react";
import Tools from "./components/Tools";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import SocialMenu from "./components/SocialMenu";
import MobileSocialMenu from "./components/MobileSocialMenu";

import "simplebar/dist/simplebar.min.css";
import "./styles/App.css";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    // <SimpleBar style={{ maxHeight: "100vh" }} autoHide={false}>
    // </SimpleBar>
    <div className="relative text-white">
      / <SocialMenu />
      <MobileSocialMenu />
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <AboutMe />
              <Skills />
              <Tools />
              {/* <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div> */}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
