import Email from "../public/icons/Email"
import Github from "../public/icons/Github"
import Linkedin from "../public/icons/Linkedin"


const SocialMenu = () => {
  return (
    <div className='fixed bottom-0 left-10'>
        <div className='flex flex-col items-center justify-end gap-4'>
            <a target='_blank' rel="noreferrer" href='https://github.com/fatemeRasolzade'>
                <Github className=" transition-all duration-500 hover:text-main-purple hover:-translate-y-1 hover:scale-110"/>
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/fatemerasolzade/'>
                <Linkedin className=" transition-all duration-500 hover:text-main-purple hover:-translate-y-1 hover:scale-110"/>
            </a>
            <a target='_blank' rel="noreferrer" href='fatemerasolzade.1424@gmail.com'>
                <Email className=" transition-all duration-500 hover:text-main-purple hover:-translate-y-1 hover:scale-110"/>
            </a>
            <div className='h-40 bg-white w-0.5'></div>
        </div>
    </div>
  )
}

export default SocialMenu