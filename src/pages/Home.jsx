import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import AboutUs from '../components/AboutUs';
import Programs from '../components/Programs';
import WorkingHours from '../components/WorkingHours';
import Facts from '../components/Facts';
import OurTeam from '../components/OurTeam';
import Testimonial from '../components/Testimonial';
import BlogSection from '../components/BlogSection';


const Home = () => {
  return (
    <>
    <HomeCarousel />
    <AboutUs />
    <Programs />
    <WorkingHours />
    <Facts />
    <OurTeam />
    <Testimonial />
    <BlogSection />
    </>
  )
}

export default Home