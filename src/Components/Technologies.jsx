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
  { text: 'MongoDB', value: 500 },
  { text: 'PostgreSQL', value: 500 },
  { text: 'AWS', value: 500 },
  { text: 'Google Cloud', value: 100 },
  { text: 'React Native', value: 100 },
  { text: 'Styled-Components', value: 100 },
  { text: 'RESTful API', value: 300 },
  { text: 'Expo', value: 100 },
  { text: 'Nginx', value: 100 },
  { text: 'Webpack', value: 100 },
  { text: 'Parcel', value: 100 },
  { text: 'NPM', value: 200 },
  { text: 'Mongoose', value: 200 },
  { text: 'Figma', value: 200 },
];

const learning = [
  { text: 'Typescript', value: 200 },
  { text: 'Docker', value: 500 },
  { text: '.Net', value: 400},
  { text: 'C#', value: 300},
];

const colors = [
  'burlywood',
  '#c2cdcb',
  '#c3a39c',
  '#f6eee9',
  '#a7563d',
  '#94abad',
  '#dfa291',
  '#f0e2dc',
  '#5a3834',
  '#b0a1a1'
]

const Technologies = () => {
  return (
    <div className='Sections'>
      <h6 className="SectionHeader">Technologies.</h6>
      <p className="TechHeader">Current Technologies:</p>
      <WordCloud
        data={known}
        width={800}
        height={300}
        fill={(d,i) => colors[Math.floor(Math.random() * 10)]}
        font="Montserrat"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 3}
        spiral="rectangular"
        rotate={(word) => word.value % 5}
        padding={7}
        random={Math.random}
      />
      <p className="TechHeader">Currently Learning:</p>
      <WordCloud
        data={learning}
        width={800}
        height={300}
        fill={(d,i) => colors[Math.floor(Math.random() * 10)]}
        font="Montserrat"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 4}
        spiral="rectangular"
        rotate={(word) => word.value % 5}
        padding={15}
        random={Math.random}
      />
    </div>
  );
}

export default Technologies;