import React from 'react';
import { NavLink } from 'react-router-dom';

import Image1 from '../img/carousel-1.jpg';
import Image2 from '../img/carousel-2.jpg';

const HomeCarousel = () => {
  return (
    <>
    <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={Image1} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth : '900px'}}>
                            <h5 className="text-white text-uppercase">Best Gym Center</h5>
                            <h1 className="display-2 text-white text-uppercase mb-md-4">Build Your Body Strong With Gymster</h1>
                            <NavLink to="/contact" className="btn btn-primary py-md-3 px-md-5 me-3">Join Us</NavLink>
                            <NavLink to="/contact" className="btn btn-light py-md-3 px-md-5">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={Image2} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '900px'}}>
                            <h5 className="text-white text-uppercase">Best Gym Center</h5>
                            <h1 className="display-2 text-white text-uppercase mb-md-4">Grow Your Strength With Our Trainers</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Join Us</a>
                            <a href="" className="btn btn-light py-md-3 px-md-5">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </>
  )
}

export default HomeCarousel