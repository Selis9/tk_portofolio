import logo from '../tk.png';
import AboutMe from './AboutMe';
import Welcome from './Welcome';
import Navigation from './NavigationBar';
import Projects from './Projects';
import Technologies from './Technologies';

const MainPage = () => {

  console.log(
    `     ╦ ╦╦╦═╗╔═╗  ╔╦╗╔═╗  ╔═╗╦  ╔═╗╔═╗╔═╗╔═╗
     ╠═╣║╠╦╝║╣   ║║║║╣   ╠═╝║  ║╣ ╠═╣╚═╗║╣
     ╩ ╩╩╩╚═╚═╝  ╩ ╩╚═╝  ╩  ╩═╝╚═╝╩ ╩╚═╝╚═╝`
  )

  return (
    <div className="Main">
      <div className="Logo">
        <a href="http://www.tonykang.dev">
          <img src={logo} alt="logo" width={150}/>
        </a>
      </div>
        <Navigation />
        <Welcome />
        <AboutMe />
        <Projects />
        <Technologies />
    </div>
  );
}

export default MainPage;