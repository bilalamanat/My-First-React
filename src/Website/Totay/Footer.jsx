import React from 'react';
import data from './data.json';

function Footer() {
  const { openingTiming, contact, socialLinks } = data;

  return (
    <>
      {/* Footer */}
      <section id="footer">
        <div className="footer-img">
          <img src="img/Vecter.jpg" alt="Footer Vector" />
        </div>
        <div className="title-text">
          <p>CONTACT</p>
        </div>
        <div className="footer-row">
          <div className="footer-left">
            <h1>Opening Timing</h1>
            {openingTiming.map((time, index) => (
              <p key={index}>
                <i className="far fa-clock" />
                {time.day} - {time.timing}
              </p>
            ))}
          </div>
          <div className="footer-right">
            <h1>Get In Touch</h1>
            <p>
              <i className="fas fa-map-marker-alt" /> {contact.address}
            </p>
            <p>
              <i className="fas fa-envelope" />
              {contact.email}
            </p>
            <p>
              <i className="fas fa-phone" /> {contact.phone}
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${link.platform.toLowerCase()}`} />
                </a>
              ))}
              <p>
                Copyright <strong>BILAL GIT-HUB</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
