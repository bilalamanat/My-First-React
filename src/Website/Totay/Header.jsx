import React from 'react';
import headerData from './headerData.json';

function Header() {
  const { logoSrc, navLinks, title, description } = headerData;

  return (
    <section className="header">
      <nav>
        <a href="index.html">
          <img src={logoSrc} alt="Logo" />
        </a>
        <div className="nav-links">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="text-box">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#" className="hero-btn">
          Visit Us To Know More
        </a>
      </div>
    </section>
  );
}

export default Header;
