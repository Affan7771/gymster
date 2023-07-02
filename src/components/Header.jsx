import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
                <NavLink to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
                </NavLink>
            </div>
            <div className="col-lg-9">
                <div className="row gx-0 bg-secondary d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                            <i className="fa fa-envelope text-primary me-2"></i>
                            <h6 className="mb-0">info@example.com</h6>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2">
                            <i className="fa fa-phone-alt text-primary me-2"></i>
                            <h6 className="mb-0">+012 345 6789</h6>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="d-inline-flex align-items-center py-2">
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle" href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                    <NavLink to="/" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <NavLink to="/" activeClassName="active" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" activeClassName="active" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/classes" activeClassName="active" className="nav-item nav-link">Classes</NavLink>
                            <NavLink to="/trainers" activeClassName="active" className="nav-item nav-link">Trainers</NavLink>
                            <NavLink to="/blogs" activeClassName="active" className="nav-item nav-link">Blogs</NavLink>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                </div>
                            </div> */}
                        </div>
                        <NavLink to="/contact" className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block">Join Us</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header