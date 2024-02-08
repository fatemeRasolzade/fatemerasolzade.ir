import TransitionText from "../components/TransitionText";
import Fatemeh from "../assets/images/fatemeh.jpg";
import Code from "../assets/icons/Code";
import Fragment from "../assets/icons/Fragment";
import BinaryNumbers from "../assets/icons/BinaryNumbers";

const AboutMe = () => {
  return (
    <div className="section">
      <div className="relative">
        <div className="mx-auto max-w-7xl text-white !flex justify-center items-center animate-banner gap-32">
          <div className="flex flex-col justify-start min-w-[38rem]">
            <p className="text-2xl">Hello there!</p>
            <TransitionText text="I'm Fatemeh Rasolzadeh" wrapperClassName="mt-4" />
            <TransitionText text="Front-End Developer" wrapperClassName="mt-2" />
            <p className="mt-5 text-lg sm:text-base font-verdana opacity-50 text-justify">
              I'm a programmer, I make love with codes and live with my projects.
              <br /> It's not just a job but a lifestyle, in fact I can't imagine life without it.
              <br /> it's a never-ending world with new and tough challenges every day,
              <br /> never before facing They are not afraid and exciting and attractive to me.
            </p>
            <a
              download={"fatemeRasolzade.pdf"}
              className="text-xl text-main-blue mt-4 cursor-pointer icon-transition"
              href={"../assets/documents/resume.pdf"}
            >{`<Download CV />`}</a>
          </div>
          <img src={Fatemeh} alt="fatemeh" width={500} className="rounded-b-full border-t" />
        </div>
        <Fragment className={"absolute -top-56 left-[107rem] blur-[6px] text-main-orange"} />
        <Code className={"absolute top-[23.4rem] left-[67rem] blur-[6px]"} />
        <BinaryNumbers className={"absolute -top-[5rem] -left-16 blur-[6px]"} />
      </div>
    </div>
  );
};

export default AboutMe;
