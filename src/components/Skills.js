import { designs, techs } from "../data/Skills";

const Skills = () => {
  return (
    <main className="mx-auto max-w-7xl text-white relative flex justify-center items-center gap-32">
      <div className="flex flex-col justify-start">
        <h3 className="text-6xl sm:text-5xl font-semibold mt-4 text-center">Skills & Experience</h3>
        <p className="mt-5 text-lg sm:text-base font-verdana opacity-50 text-center">
          I use the best and most up-to-date web technologies to create maintain and custom websites.
          <br /> Websites that are fully responsive and can be used on any device and user. I make the
          template using React or Next.
          <br /> Make them beautiful and attractive with design systems like css, scss, bootstrap, ...
          <br /> Make the site interactive by using API calls to get data from the server.
        </p>
        <div className="flex flex-col gap-8 mt-10">
          <div className="flex gap-8 h-20">
            {techs.map((item) => (
              <img
                src={`./images/${item}.png`}
                className={` ${item === "js" ? "rounded-md" : ""}`}
                width={80}
                alt={item}
              />
            ))}
          </div>
          <div className="flex gap-8 h-20 justify-center">
            {designs.map((item) => (
              <img src={`./images/${item}.png`} width={80} alt={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
