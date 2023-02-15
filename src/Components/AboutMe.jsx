import React from 'react';
import Photo from '../tonykanglandscape.jpg'

const AboutMe = () => {
  return (
    <div className='Sections'>
      <h6 className="SectionHeader" id="about">About Me.</h6>
          <img id="landscapePhoto" src={Photo} alt="landscape" width={720}/>
      <div className="AboutMeSection">
        <div className="AboutMe">
          <p>Hello there!</p>
          <p>My name is <strong>Tony Kang</strong>. I am an IT professional turned Software Developer/Fullstack Engineer.</p>
          <p>I grew up with a passion for the creative arts. However, fell in love with tech along the way. I pursued IT as a career to expose myself to new tech and how to integrate them. During my tenure in IT, I was always exposed to code and programming concepts, which really piqued my interest in learning it - to the point I took a loop of faith and decided to jump careers via Hack Reactor's Software Engineering Immersive coding bootcamp. It was an amazing and fun experience learning and coding what I've built so far - from responsive frontend websites, to robust RESTful APIs server and database servers, to Fullstack MERN/PERN applications. I know I still have much more to learn after graduating and definitely excited for whats to come. I am interested in fullstack roles that will allow me to meld my love for art and design, with my love for tech/coding.</p>
          <p>Here is my <a href='https://drive.google.com/file/d/1KoUhfCpKzQQt1k479rYSdIa5wdjZ6PLp/view?usp=sharing'>RESUME</a>.</p>
          <p>Want to know more? Reach out to me at: <a href="mailto:tony.andrew.kang@gmail.com">tony.andrew.kang@gmail.com</a></p>
          <p>Thanks for stopping by!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;