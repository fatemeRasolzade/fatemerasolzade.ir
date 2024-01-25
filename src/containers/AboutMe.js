import Fatemeh from "../public/images/fatemeh.jpg";

const AboutMe = () => {
  return (
    <div className="section ">
      <div className="mx-auto max-w-7xl text-white !flex justify-center items-center gap-32">
        <div className="flex flex-col justify-start">
          <p className="text-2xl">Hello there!</p>
          <h1 className="text-6xl sm:text-5xl font-semibold mt-4">I'm Fatemeh Rasolzadeh</h1>
          <h2 className="text-6xl sm:text-5xl font-semibold mt-2">Front-End Developer</h2>
          <p className="mt-5 text-lg sm:text-base font-verdana opacity-50 text-justify">
            I'm a programmer, I make love with codes and live with my projects.
            <br /> It's not just a job but a lifestyle, in fact I can't imagine life without it.
            <br /> it's a never-ending world with new and tough challenges every day,
            <br /> never before facing They are not afraid and exciting and attractive to me.
          </p>
          <p className="text-xl text-main-blue mt-4 cursor-pointer">{`<Download CV />`}</p>
        </div>
        <img src={Fatemeh} alt="fatemeh" width={500} className="rounded-b-full border-t" />
      </div>
    </div>
  );
};

export default AboutMe;
