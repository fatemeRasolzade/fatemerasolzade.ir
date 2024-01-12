import Email from "../public/icons/Email";
import Github from "../public/icons/Github";
import Linkedin from "../public/icons/Linkedin";

const MobileSocialMenu = () => {
  return (
    <div className="sm:hidden fixed top-0 right-0 py-2 px-5 pl-10 w-full bg-dark-blue">
      <div className="flex items-center justify-end gap-4">
        <div className="w-full bg-white h-0.5"></div>
        <a target="_blank" rel="noreferrer" href="https://github.com/fatemeRasolzade">
          <Github className="icon-transition" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fatemerasolzade/">
          <Linkedin className="icon-transition" />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:fatemerasolzade.1424@gmail.com">
          <Email className="icon-transition" />
        </a>
      </div>
    </div>
  );
};

export default MobileSocialMenu;
