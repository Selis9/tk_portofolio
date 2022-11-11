import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'


const Navigation = () => {
  return (
    <div className='navigation'>
      <AnchorLink href="#about">
        <p>About</p>
      </AnchorLink>
      <div className="navline"></div>
      <AnchorLink href="#projects">
        <p>Projects</p>
      </AnchorLink>
      <div className="navline"></div>
      <AnchorLink href="#workhistory">
        <p>Work History</p>
      </AnchorLink>
    </div>
  );
}

export default Navigation;