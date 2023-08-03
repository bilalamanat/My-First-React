import React from 'react';
import coursesData from './courses.json';

function Course() {
  return (
    <div className="Course">
      <h1>Course We Offer</h1>
      <p>This is a very high-level course in the world.</p>
      <div className="row">
        {coursesData.map((course, index) => (
          <div className="course-col" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
