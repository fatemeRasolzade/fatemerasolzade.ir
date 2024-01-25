import Email from "../public/icons/Email";
import Github from "../public/icons/Github";
import Linkedin from "../public/icons/Linkedin";

const SocialMenu = () => {
  return (
    <div className="hidden sm:inline fixed bottom-0 left-10 z-10">
      <div className="flex flex-col items-center justify-end gap-4">
        <a target="_blank" rel="noreferrer" href="https://github.com/fatemeRasolzade">
          <Github className="icon-transition" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fatemerasolzade/">
          <Linkedin className="icon-transition" />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:fatemerasolzade.1424@gmail.com">
          <Email className="icon-transition" />
        </a>
        <div className="h-40 bg-white w-0.5"></div>
      </div>
    </div>
  );
};

export default SocialMenu;
