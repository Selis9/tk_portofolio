import React from 'react';
import Photo from '../tonykanglandscape.jpg'

const AboutMe = () => {
  return (
    <div className='Sections'>
      <h6 className="SectionHeader">About Me.</h6>
          <img id="landscapePhoto" src={Photo} alt="landscape" width={720}/>
      <div className="AboutMeSection">
        <div className="AboutMe">
          <p>Hello there!</p>
          <p>My name is <strong>Tony Kang</strong>. I am an IT professional turned Software Developer/Fullstack Engineer!</p>
          <p>I grew up with a passion for art and design. However, fell in love with tech along the way. I pursued IT as a career to expose myself to new business apps and how to integrate them end enjoyed every second of it. However, during my tenure in IT, I was always exposed to programming and had an interest in learning - to the point I took a loop of faith and decided to jump careers via Hack Reactor's Software Engineering Immersive coding bootcamp. It was an amazing and fun experience learning what I've learned and built so far, and I know I still have much more to learn after graduating. Definitely excited for whats to come! I am currently looking for a role!</p>
          <p>Here is my <a href='https://drive.google.com/file/d/1KoUhfCpKzQQt1k479rYSdIa5wdjZ6PLp/view?usp=sharing'>RESUME</a>.</p>
          <p>Want to know more? Reach out to me at: <a href="mailto:tony.andrew.kang@gmail.com">tony.andrew.kang@gmail.com</a></p>
          <p>Thanks for stopping by!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;