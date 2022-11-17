import React from 'react';
import { FiGithub } from 'react-icons/fi';
import GameStart from '../GameStart.gif';
import Odin from '../Odin.png';
import Moist from '../Moist.png';
import Reviews from '../SDC_Reviews.png';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const projectsList = [
  {title: "GameStart",
  description: "Project consisting of 6 team members to build a fullstack game trading app built with React Native, Express, Node, and PostgreSQL. The app allows users to post/send trades with other users, has a built in messaging feature, and includes a map feature to show nearby traders (similar to rideshare services). Connected to gaming API for full details and photos.",
  url:"https://github.com/Selis9/GameStart",
  img:GameStart,
  width: '40%'},
  {title: "Moist",
  description: "Solo Fullstack Gardening Journal with watering reminder app built in less than a day - built with React, Express, Node, and MongoDB. Keep track of your plants, when you water them, when you planted them, and when you last fertlized them. Future possible implementations include local weather affecting watering timing and reminders.",
  url:"https://github.com/Selis9/Moist",
  img:Moist,
  width: '100%'},
  {title: "Odin",
  description: "Project consiting of 4 team members builiding a Frontend E-commerce platform with legacy data using React. Given an API and Business requirement document, the team took ownership of each section of the page and collaboratively built the frontend calling the API for each section.",
  url:"https://github.com/rfp2207boyz2men/frontendcapstone",
  img:Odin,
  width: '900px'},
  {title: "Reviews",
  description: "3-person backend project to build the API server and database server with legacy frontend data using PostgreSQL given relatively raw data that needed to be loaded to a database.",
  url:"https://github.com/Selis9/SDC_Reviews",
  img:Reviews,
  width: '100%'},
];

const Projects = () => {
  return (
    <div className='Sections'>
      <h6 className="SectionHeader">Projects.</h6>
      <Tabs>
        <TabList className="Tabs">
          {projectsList.map(project => (
            <Tab key={project.title + project.url}>{project.title}</Tab>
          ))}
        </TabList>
          {projectsList.map(project => (
            <TabPanel key={project.title + project.url}>
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