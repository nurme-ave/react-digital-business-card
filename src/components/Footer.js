import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';


function Info() {
  return (
    <section className="footer">
      <a href="https://twitter.com/ave_nurme" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={ faTwitter } className="footer-icon flick" />
      </a>
      <a href="https://www.youtube.com/channel/UC_kKIEE66Wa5bAxjqoI1A8w/videos" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={ faYoutube } className="footer-icon flick" />
      </a>
      <a href="https://github.com/nurme-ave" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={ faGithub } className="footer-icon flick" />
      </a>
    </section>
  );
}

export default Info;