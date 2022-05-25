import image from '../images/seascape.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Info() {
  return (
    <section>
      <img src={image} alt="me" className="info-image"></img>
      <div className="card-container card-container-info">
        <div className="info-text">
          <h1 className="info-title">Ave Nurme</h1>
          <p className="info-occupation">Frontend Developer Ninja
            <FontAwesomeIcon icon={ faUserNinja } className="info-icon ninja-icon" />
          </p>
          <a href="https://www.avenurme.dev/" target="_blank" rel="noreferrer" className="info-website">avenurme.dev</a>
        </div>
        <div className="info-button-links">
          <a href="mailto:me@example.com" target="_blank" rel="noreferrer" className="info-email">
            <FontAwesomeIcon icon={ faEnvelope } className="info-icon" />Email</a>
          <a href="https://www.linkedin.com/in/ave-nurme/" target="_blank" rel="noreferrer" className="info-linkedin">
            <FontAwesomeIcon icon={ faLinkedin } className="info-icon" />LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Info;