import React from 'react'
import Header from './Totay/Header'
import Course from './Totay/Course'
import Campus from './Totay/Campus'
import Facilites from './Totay/Facilites'
import Testimonial from './Totay/Testimonial'
import Call from './Totay/Call'
import Footer from './Totay/Footer'
function University() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>University website design</title>
    <link rel="stylesheet" href="stylesheet.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    {/* header */}
   <Header />
    {/* Course */}
   <Course />
    {/* Campus */}
   <Campus />
    {/* Facilities */}
   <Facilites />
    {/* Testimonials */}
   <Testimonial />
    {/* Call To Action */}
  <Call />
    {/* Footer */}
    <Footer />
  </>
  
  )
}

export default University