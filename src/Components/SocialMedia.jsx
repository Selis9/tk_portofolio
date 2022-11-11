import { FiLinkedin, FiGithub, FiInstagram  } from 'react-icons/fi'

const SocialMedia = () => {
  return (
    <div className='Socials'>
      <div className="SocialLine">
      </div>
      <a href="https://github.com/Selis9">
      <FiGithub size="1.5em" className="SocialIcon"/>
      </a>
      <a href="https://www.linkedin.com/in/tonyandrewkang/">
      <FiLinkedin size="1.5em" className="SocialIcon"/>
      </a>
      <a href="https://www.instagram.com/depth.of.tonee/">
      <FiInstagram size="1.5em" className="SocialIcon"/>
      </a>

    </div>
  );
}

export default SocialMedia;