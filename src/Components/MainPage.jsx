import logo from '../tk.png';
import AboutMe from './AboutMe';
import Welcome from './Welcome';
import Navigation from './NavigationBar';
import Projects from './Projects';
import Technologies from './Technologies';

const MainPage = () => {
  return (
    <div className="Main">
      <div className="Logo">
        <a href="http://www.tonykang.dev">
          <img src={logo} alt="logo" width={150}/>
        </a>
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <Welcome />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
    </div>
  );
}

export default MainPage;