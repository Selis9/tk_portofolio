import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Navigation = () => {
  return (
    <div className='Navigation'>
      <AnchorLink href="#about">
        <p>About</p>
      </AnchorLink>
      <div className="NavLine"></div>
      <AnchorLink href="#projects">
        <p>Projects</p>
      </AnchorLink>
      <div className="NavLine"></div>
      <AnchorLink href="#technologies">
        <p>Technologies</p>
      </AnchorLink>
    </div>
  );
}

export default Navigation;