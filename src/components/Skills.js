const Skills = () => {
  return (
    <>
      <h3 className="text-6xl sm:text-5xl font-semibold mt-4 text-center">Skills & Experience</h3>
      <p className="mt-5 text-lg sm:text-base font-verdana opacity-50 text-center">
        I use the best and most up-to-date web technologies to create maintain and custom websites.
        <br /> Websites that are fully responsive and can be used on any device and user. I make the template
        using React or Next.
        <br /> Make them beautiful and attractive with design systems like css, scss, bootstrap, ...
        <br /> Make the site interactive by using API calls to get data from the server.
      </p>
      <div className="flex flex-col gap-8 mt-10">
        <div className="flex gap-8 h-20">
          <img src="./images/html.png" width={80} alt="html" />
          <img src="./images/css.png" width={80} alt="css" />
          <img src="./images/javaScript.png" className="rounded-md" width={80} alt="js" />
          <img src="./images/typeScript.png" width={80} alt="ts" />
          <img src="./images/react.png" width={80} alt="react" />
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
