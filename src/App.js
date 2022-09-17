
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import SocialMenu from './components/SocialMenu';
import './styles/App.css';

function App() {
  return (
    <main className='px-52 pt-32 text-white relative'>
      <p className='text-base'>hello, I am</p>
      <h1 className="text-7xl mt-5 font-['msmadi']">Fatemeh Rasolzadeh</h1>
      <p className='mt-10 text-xl font-["verdana"] text-light-purple'>Front-end developer, create user friendly website to help businesses do better online</p>
      <AboutMe/>
      <Skills/>
      <SocialMenu/>
    </main>
  );
}

export default App;
