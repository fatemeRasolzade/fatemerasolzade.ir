import TransitionText from "../components/TransitionText";
import Fatemeh from "../public/images/fatemeh.jpg";

const AboutMe = () => {
  return (
    <div className="section ">
      <div className="mx-auto max-w-7xl text-white !flex justify-center items-center gap-32">
        <div className="flex flex-col justify-start">
          <p className="text-2xl">Hello there!</p>
          <TransitionText text="I'm Fatemeh Rasolzadeh" wrapperClassName="mt-4" />
          <TransitionText text="Front-End Developer" wrapperClassName="mt-2" />
          <p className="mt-5 text-lg sm:text-base font-verdana opacity-50 text-justify">
            I'm a programmer, I make love with codes and live with my projects.
            <br /> It's not just a job but a lifestyle, in fact I can't imagine life without it.
            <br /> it's a never-ending world with new and tough challenges every day,
            <br /> never before facing They are not afraid and exciting and attractive to me.
          </p>
          <a href="/somefile.txt" download>
            Click to download
          </a>
          <a
            download={"fatemeRasolzade.pdf"}
            className="text-xl text-main-blue mt-4 cursor-pointer icon-transition"
            href={"../public/documents/resume.pdf"}
          >{`<Download CV />`}</a>
        </div>
        <img src={Fatemeh} alt="fatemeh" width={500} className="rounded-b-full border-t" />
      </div>
    </div>
  );
};

export default AboutMe;
