import React from 'react';
import Testimonial_main from '../img/testimonial.jpg';
import Testimonial1 from '../img/testimonial-1.jpg';
import Testimonial2 from '../img/testimonial-2.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const Options = {
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    };
    return (
        <>
        <div className="container-fluid p-0 my-5">
            <div className="row g-0">
                <div className="col-lg-6" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={Testimonial_main} style={{objectFit: 'cover'}} />
                    </div>
                </div>
                <div className="col-lg-6 bg-dark p-5">
                    <div className="mb-5">
                        <h5 className="text-primary text-uppercase">Testimonial</h5>
                        <h1 className="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
                    </div>
                    <OwlCarousel className="owl-carousel testimonial-carousel" {...Options}>
                        <div className="testimonial-item">
                            <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid rounded-circle" src={Testimonial1} alt="testimonial-img" />
                                <div className="ps-4">
                                    <h5 className="text-uppercase text-light">Client Name</h5>
                                    <span className="text-uppercase text-secondary">Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid rounded-circle" src={Testimonial2} alt="testimonial-img" />
                                <div className="ps-4">
                                    <h5 className="text-uppercase text-light">Client Name</h5>
                                    <span className="text-uppercase text-secondary">Profession</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonial