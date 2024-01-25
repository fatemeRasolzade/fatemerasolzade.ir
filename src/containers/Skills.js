import { designs, techs } from "../data/Skills";
import TransitionText from "../components/TransitionText";

const Skills = () => {
  return (
    <div className="section mx-auto max-w-7xl text-white relative flex justify-center items-center gap-32">
      <div className="flex flex-col justify-start">
        <TransitionText text="Skills & Experience" wrapperClassName="justify-center" />
        <p className="mt-5 text-lg sm:text-base font-verdana opacity-50 text-center">
          I use the best and most up-to-date web technologies to create maintain and custom websites.
          <br /> Websites that are fully responsive and can be used on any device and user. I make the
          template using React or Next.
          <br /> Make them beautiful and attractive with design systems like css, scss, bootstrap, ...
          <br /> Make the site interactive by using API calls to get data from the server.
        </p>
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
          <div className="flex gap-5 h-16">
            {techs.map((item) => (
              <img
                src={`./images/${item}.png`}
                className={`icon-transition ${item === "js" ? "rounded-md" : ""}`}
                width={65}
                alt={item}
              />
            ))}
          </div>
          <div className="flex gap-5 h-16 justify-center">
            {designs.map((item) => (
              <img src={`./images/${item}.png`} className="icon-transition" width={65} alt={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
