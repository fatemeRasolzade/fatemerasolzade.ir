import { tools } from "../data/Skills";

const Tools = () => {
  return (
    <div className="section mx-auto max-w-7xl text-white relative flex justify-center items-center gap-32">
      <div className="flex flex-col justify-start">
        <h3 className="text-6xl sm:text-5xl font-semibold mt-4 text-center">Tools & requirements</h3>
        <p className="mt-5 text-lg sm:text-base font-verdana opacity-50 text-center">
          I need professional and trendy tools for coding, team work, testing and generating backend APIs,
          <br /> recording tasks I do and implementing the designer plan.
        </p>
        <div className="flex flex-col gap-8 mt-10">
          <div className="flex gap-8 h-16 justify-center">
            {tools.map((item) => (
              <img src={`./images/${item}.png`} className="icon-transition" width={65} alt={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
