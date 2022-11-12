import React from 'react';
import { FiGithub } from 'react-icons/fi';
import GameStart from '../GameStart.gif';
import Odin from '../Odin.png';
import Moist from '../Moist.png';
import Reviews from '../SDC_Reviews.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const projectsList = [
  {title: "GameStart", description: "Fullstack Game trading app built with React Native", url:"https://github.com/Selis9/GameStart", img:GameStart, width: '40%'},
  {title: "Moist", description: "Fullstack Gardening Journal with watering reminder", url:"https://github.com/Selis9/Moist", img:Moist, width: '100%'},
  {title: "Odin", description: "Frontend E-commerce platform with legacy data", url:"https://github.com/rfp2207boyz2men/frontendcapstone", img:Odin, width: '900px'},
  {title: "Reviews", description: "Backend API with legacy front end", url:"https://github.com/Selis9/SDC_Reviews", img:Reviews, width: '100%'},
];

const Projects = () => {
  return (
    <div className='Sections'>
      <h6 className="SectionHeader">Projects.</h6>
      <Tabs>
        <TabList className="Tabs">
          {projectsList.map(project => (
            <Tab>{project.title}</Tab>
          ))}
        </TabList>
          {projectsList.map(project => (
            <TabPanel>
              <a className="Github" href={project.url}><FiGithub /></a>
              <p className="ProjectDesc">{project.description}</p>
              <img src={project.img} alt="screenshot" width={project.width}/>
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
}

export default Projects;