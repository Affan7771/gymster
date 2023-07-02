import React from 'react';
import BlogImg1 from '../img/blog-1.jpg';
import BlogImg2 from '../img/blog-2.jpg';
import BlogImg3 from '../img/blog-3.jpg';

const Sidebar = () => {
  return (
    <>
    <div className="col-lg-4">
        <div className="mb-5">
            <div className="input-group">
                <input type="text" className="form-control p-3" placeholder="Keyword" />
                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
            </div>
        </div>
        
        <div className="mb-5">
            <h3 className="text-uppercase mb-4">Categories</h3>
            <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
                <a className="fs-5 fw-bold text-light text-uppercase mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Web Design</a>
                <a className="fs-5 fw-bold text-light text-uppercase mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Web Development</a>
                <a className="fs-5 fw-bold text-light text-uppercase mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Web Development</a>
                <a className="fs-5 fw-bold text-light text-uppercase mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Keyword Research</a>
                <a className="fs-5 fw-bold text-light text-uppercase" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Email Marketing</a>
            </div>
        </div>
        
        <div className="mb-5">
            <h3 className="text-uppercase mb-4">Recent Post</h3>
            <div className="bg-dark rounded p-4">
                <div className="d-flex overflow-hidden mb-3">
                    <img className="img-fluid flex-shrink-0 rounded-start" src={BlogImg1} style={{width: '75px'}} alt="" />
                    <a href="" className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0">Sed amet tempor amet sit kasd sea lorem
                    </a>
                </div>
                <div className="d-flex overflow-hidden mb-3">
                    <img className="img-fluid flex-shrink-0 rounded-start" src={BlogImg2} style={{width: '75px'}} alt="" />
                    <a href="" className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0">Sed amet tempor amet sit kasd sea lorem
                    </a>
                </div>
                <div className="d-flex overflow-hidden mb-3">
                    <img className="img-fluid flex-shrink-0 rounded-start" src={BlogImg3} style={{width: '75px'}} alt="" />
                    <a href="" className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0">Sed amet tempor amet sit kasd sea lorem
                    </a>
                </div>
                <div className="d-flex overflow-hidden mb-3">
                    <img className="img-fluid flex-shrink-0 rounded-start" src={BlogImg1} style={{width: '75px'}} alt="" />
                    <a href="" className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0">Sed amet tempor amet sit kasd sea lorem
                    </a>
                </div>
                <div className="d-flex overflow-hidden">
                    <img className="img-fluid flex-shrink-0 rounded-start" src={BlogImg2} style={{width: '75px'}} alt="" />
                    <a href="" className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0">Sed amet tempor amet sit kasd sea lorem
                    </a>
                </div>
            </div>
        </div>
        
        <div className="mb-5">
            <h3 className="text-uppercase mb-4">Tag Cloud</h3>
            <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-dark m-1">Design</a>
                <a href="" className="btn btn-dark m-1">Development</a>
                <a href="" className="btn btn-dark m-1">Marketing</a>
                <a href="" className="btn btn-dark m-1">SEO</a>
                <a href="" className="btn btn-dark m-1">Writing</a>
                <a href="" className="btn btn-dark m-1">Consulting</a>
                <a href="" className="btn btn-dark m-1">Design</a>
                <a href="" className="btn btn-dark m-1">Development</a>
                <a href="" className="btn btn-dark m-1">Marketing</a>
                <a href="" className="btn btn-dark m-1">SEO</a>
                <a href="" className="btn btn-dark m-1">Writing</a>
                <a href="" className="btn btn-dark m-1">Consulting</a>
            </div>
        </div>
        
        <div>
            <h3 className="text-uppercase mb-4">Plain Text</h3>
            <div className="bg-dark rounded text-center text-light" style={{padding: '30px'}}>
                <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                <a href="" className="btn btn-primary py-2 px-4">Read More</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar