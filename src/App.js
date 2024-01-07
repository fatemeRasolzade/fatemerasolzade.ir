import "./styles/App.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import SocialMenu from "./components/SocialMenu";
import MobileSocialMenu from "./components/MobileSocialMenu";
import Fatemeh from "./public/images/fatemeh.jpg";

function App() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }} autoHide={false}>
      <main className="px-10 sm:px-28 md:px-40 lg:px-52 text-white relative flex justify-center items-center gap-20">
        <div className="flex flex-col justify-start">
          <p className="text-lg">Hey, Nice to meet you</p>
          <h1 className="text-6xl sm:text-7xl font-semibold mt-5 font-msmadi">
            Fatemeh Rasolzadeh
          </h1>
          <p className="mt-5 sm:mt-10 text-lg sm:text-xl font-verdana text-main-blue">
            Front-end developer, create user friendly website to help businesses
            do better online
          </p>
        </div>
        <img
          src={Fatemeh}
          alt="fatemeh"
          width={500}
          className="rounded-b-full"
        />
        {/* <AboutMe /> */}
        {/* <Skills /> */}
        <SocialMenu />
        <MobileSocialMenu />
      </main>
    </SimpleBar>
  );
}

export default App;
