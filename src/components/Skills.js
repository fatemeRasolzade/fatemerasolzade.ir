const Skills = () => {
  return (
    <>
      <h2 className="">Skills</h2>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 h-20">
          <img src="./images/html.png" width={80} alt="html" />
          <img src="./images/css.png" width={80} alt="css" />
          <img src="./images/javaScript.png" className="rounded-md" width={80} alt="js" />
          <img src="./images/typeScript.png" width={80} alt="ts" />
          <img src="./images/reactJs.png" width={80} alt="reactJs" />
          <img src="./images/nextJs.png" width={80} alt="nextJs" />
          <img src="./images/redux.png" width={80} alt="redux" />
          <img src="./images/graphql.png" width={80} alt="graphql" />
          <img src="./images/vite.png" width={80} alt="vite" />
        </div>
        <div className="flex gap-8 h-20 justify-center">
          <img src="./images/sass.png" width={80} alt="sass" />
          <img src="./images/bootstrap.png" width={80} alt="bootstrap" />
          <img src="./images/tailwindCss.png" width={80} alt="tailwindCss" />
          <img src="./images/antDesign.png" width={80} alt="antDesign" />
          <img src="./images/materialUI.png" width={80} alt="materialUI" />
        </div>
      </div>
    </>
  );
};

export default Skills;
