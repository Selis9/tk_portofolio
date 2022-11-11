import React from 'react';
import WordCloud from 'react-d3-cloud';

const known = [
  { text: 'React', value: 1000 },
  { text: 'HTML', value: 200 },
  { text: 'CSS', value: 600 },
  { text: 'Javascript', value: 500 },
  { text: 'ES5', value: 100 },
  { text: 'ES6', value: 150 },
  { text: 'NodeJS', value: 250 },
  { text: 'mySQL', value: 100 },
  { text: 'MongoDB', value: 50 },
  { text: 'PostgreSQL', value: 50 },
  { text: 'AWS', value: 50 },
  { text: 'Google Cloud', value: 10 },
  { text: 'React Native', value: 10 },
  { text: 'Styled-Components', value: 10 },
  { text: 'RESTful API', value: 300 },
  { text: 'Expo', value: 10 },
  { text: 'Nginx', value: 10 },
  { text: 'Webpack', value: 10 },
  { text: 'Parcel', value: 10 },
  { text: 'NPM', value: 200 },
];

const learning = [
  { text: 'NextJS', value: 1000 },
  { text: 'Typescript', value: 200 },
  { text: 'TailwindCSS', value: 600 },
  { text: 'Docker', value: 500 },
  { text: 'Angular', value: 100 },
];

const Technologies = () => {
  return (
    <div className='Sections'>
      <h6 className="SectionHeader">Technologies.</h6>
      <p className="TechHeader">Known:</p>
      <WordCloud
        data={known}
        width={800}
        height={300}
        font="Montserrat"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 5}
        spiral="rectangular"
        rotate={(word) => word.value % 5}
        padding={5}
        random={Math.random}
      />
      <p className="TechHeader">Currently Learning:</p>
      <WordCloud
        data={learning}
        width={800}
        height={300}
        font="Montserrat"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 5}
        spiral="rectangular"
        rotate={(word) => word.value % 5}
        padding={5}
        random={Math.random}
      />
    </div>
  );
}

export default Technologies;