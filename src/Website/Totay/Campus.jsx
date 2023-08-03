import React from 'react';
import campusData from './campusData.json';

function Campus() {
  return (
    <div>
      <section className="Campus">
        <h1>Our Global Campus</h1>
        <p>Campus is at a high level in a few seconds on this website. It's accessible to everyone.</p>
        <div className="row">
          {campusData.map((campus, index) => (
            <div className="campus-col" key={index}>
              <img src={campus.imgSrc} alt={campus.location} />
              <div className="layer">
                <h3>{campus.location}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Campus;
