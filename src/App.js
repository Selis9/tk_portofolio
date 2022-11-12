import React, { useState, useEffect } from 'react';
import LandingPage from './Components/LandingPage';
import MainPage from './Components/MainPage';
import SocialMedia from './Components/SocialMedia';
import Email from './Components/Email';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [landing, setLanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {setLanding(false)}, 2650)
  }, [])

  return (
    <div className="App">
      { landing ? <LandingPage /> :
        <div>
          <motion.div animate={{y:window.scrollY}} initial={{y:-100}} transition={{default: {ease: "linear"}}}>
            <Email />
          </motion.div>
          <motion.div animate={{y:window.scrollY}} initial={{y:-100}} transition={{default: {ease: "linear"}}}>
            <SocialMedia />
          </motion.div>
          <motion.div animate={{y: 0}} initial={{y:-100}} transition={{default: {ease: "linear"}}}>
            <MainPage />
          </motion.div>
        </div> }
    </div>
  );
}

export default App;
