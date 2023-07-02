import React from 'react'
import Hero from './Hero'
import AboutComponent from '../components/AboutUs';
import Programs from '../components/Programs';
import Facts from '../components/Facts';

import AboutImg from '../img/about.jpg'

const About = () => {
  return (
    <>
    <Hero pageTitle="About Us" />
    <AboutComponent />
    <Programs />
    <Facts />
    </>
  )
}

export default About