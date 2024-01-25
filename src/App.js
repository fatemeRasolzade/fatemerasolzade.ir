import ReactFullpage from "@fullpage/react-fullpage";
import Tools from "./containers/Tools";
import Skills from "./containers/Skills";
import AboutMe from "./containers/AboutMe";
import SocialMenu from "./components/SocialMenu";
import MobileSocialMenu from "./components/MobileSocialMenu";

import "./styles/App.css";

function App() {
  return (
    <div className="relative text-white">
      <SocialMenu />
      <MobileSocialMenu />
      <ReactFullpage
        navigation={true}
        scrollingSpeed={2000}
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
