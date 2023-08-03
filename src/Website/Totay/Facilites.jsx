import React from 'react';
import facilitiesData from './facilitiesData.json';

function Facilites() {
  return (
    <div>
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Our Facilities are very nice and recommended for everyone. They are well decorated.</p>
        <div className="row">
          {facilitiesData.map((facility, index) => (
            <div className="facilities-col" key={index}>
              <img src={facility.icon} alt={facility.title} />
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Facilites;
