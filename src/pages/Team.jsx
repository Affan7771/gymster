import React from 'react';
import Hero from './Hero';

import Team1 from '../img/team-1.jpg';
import Team2 from'../img/team-2.jpg';
import Team3 from '../img/team-3.jpg';

const Team = () => {
    const backgroundStyle = {
        background: 'rgba(34, 36, 41, .9)'
    }
  return (
    <>
    <Hero pageTitle="Our Trainers" />
    <div className="container-fluid p-5">
        <div className="mb-5 text-center">
            <h5 className="text-primary text-uppercase">The Team</h5>
            <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div className="row g-5">
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src={Team1} alt="" />
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={backgroundStyle}>
                        <h5 className="text-uppercase text-light">John Deo</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src={Team2} alt="" />
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={backgroundStyle}>
                        <h5 className="text-uppercase text-light">James Taylor</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src={Team3} alt="" />
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={backgroundStyle}>
                        <h5 className="text-uppercase text-light">Adam Phillips</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src={Team1} alt="" />
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={backgroundStyle}>
                        <h5 className="text-uppercase text-light">John Deo</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src={Team2} alt="" />
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={backgroundStyle}>
                        <h5 className="text-uppercase text-light">James Taylor</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src={Team3} alt="" />
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={backgroundStyle}>
                        <h5 className="text-uppercase text-light">Adam Phillips</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team