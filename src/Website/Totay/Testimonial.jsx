import React from 'react'

function Testimonial() {
  return (
    <div> 
        <section className="Testimonials">
    <h1>What Our Student Says</h1>
    <p>Student have been Completed Home Work and Decorated in His Life.</p>
    <div className="row">
      <div className="testimonial-col">
        <img src="img/user3.jpg" />
      </div>
      <div>
        <p>Making Website is Now One Of The esiest thing in the world.You just need to learn HTML,<br />Javascript
          and
          you are good to go.
        </p>
        <h3>Bilal Amanat Muhammadi</h3>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
      </div>
      <div className="testimonial-col">
        <img src="img/user4.jpg" />
      </div>
      <div>
        <p>Making Website is Now One Of The esiest thing in the world.You just need to learn HTML,<br />Javascript
          and
          you are good to go.
        </p>
        <h3>Abdullah Amanat Muhammadi</h3>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-half-o" />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Testimonial