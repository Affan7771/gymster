import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import axios from 'axios';

import BlogImg1 from '../img/blog-1.jpg';
import BlogImg2 from '../img/blog-2.jpg';
import BlogImg3 from '../img/blog-3.jpg';
import Sidebar from '../components/Sidebar';


const Blog = () => {
    const [datas, setDatas] = useState([]);
    const myApiKey = import.meta.env.VITE_API_KEY;
    const getDay = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        return `${day}`;
    }
    const getMonth = (dateString) => {
        const dateObj = new Date(dateString);
        const monthIndex = dateObj.getMonth();
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const month = months[monthIndex];
        return `${month}`;
    }
    const getYear = (dateString) => {
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        return `${year}`;
    };
    const getData = async () => {
        try{
            const response = await axios.get('https://blogsapi.p.rapidapi.com/', {
                headers: {
                    'X-RapidAPI-Key': myApiKey,
                },
            })
            console.log(response.data);
            setDatas(response.data.results);
        }
        catch (error){
            console.error(error);
        }
    }
    useEffect(() => {
        getData();
    },[])
    return (
        <>
        <Hero pageTitle="Our Blogs" />
        <div className="container-fluid p-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    <div className="row g-5">
                        {
                            datas.map((data) =>(
                                <div className="col-md-6" key={data.id}>
                                    <div className="blog-item">
                                        <div className="position-relative overflow-hidden rounded-top">
                                            <img className="img-fluid" src={data.image} alt="" />
                                        </div>
                                        <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                                <span>{getDay(data.date_published)}</span>
                                                <h6 className="text-light text-uppercase mb-0">{getMonth(data.date_published)}</h6>
                                                <span>{getYear(data.date_published)}</span>
                                            </div>
                                            <a className="h5 text-uppercase text-light" href="">{data.title}</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                        {/* <div className="col-md-6">
                            <div className="blog-item">
                                <div className="position-relative overflow-hidden rounded-top">
                                    <img className="img-fluid" src={BlogImg2} alt="" />
                                </div>
                                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                        <span>01</span>
                                        <h6 className="text-light text-uppercase mb-0">January</h6>
                                        <span>2045</span>
                                    </div>
                                    <a className="h5 text-uppercase text-light" href="">Sed amet tempor amet sit kasd sea lorem</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item">
                                <div className="position-relative overflow-hidden rounded-top">
                                    <img className="img-fluid" src={BlogImg3} alt="" />
                                </div>
                                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                        <span>01</span>
                                        <h6 className="text-light text-uppercase mb-0">January</h6>
                                        <span>2045</span>
                                    </div>
                                    <a className="h5 text-uppercase text-light" href="">Sed amet tempor amet sit kasd sea lorem</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item">
                                <div className="position-relative overflow-hidden rounded-top">
                                    <img className="img-fluid" src={BlogImg1} alt="" />
                                </div>
                                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                        <span>01</span>
                                        <h6 className="text-light text-uppercase mb-0">January</h6>
                                        <span>2045</span>
                                    </div>
                                    <a className="h5 text-uppercase text-light" href="">Sed amet tempor amet sit kasd sea lorem</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item">
                                <div className="position-relative overflow-hidden rounded-top">
                                    <img className="img-fluid" src={BlogImg2} alt="" />
                                </div>
                                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                        <span>01</span>
                                        <h6 className="text-light text-uppercase mb-0">January</h6>
                                        <span>2045</span>
                                    </div>
                                    <a className="h5 text-uppercase text-light" href="">Sed amet tempor amet sit kasd sea lorem</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item">
                                <div className="position-relative overflow-hidden rounded-top">
                                    <img className="img-fluid" src={BlogImg3} alt="" />
                                </div>
                                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                        <span>01</span>
                                        <h6 className="text-light text-uppercase mb-0">January</h6>
                                        <span>2045</span>
                                    </div>
                                    <a className="h5 text-uppercase text-light" href="">Sed amet tempor amet sit kasd sea lorem</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item">
                                <div className="position-relative overflow-hidden rounded-top">
                                    <img className="img-fluid" src={BlogImg1} alt="" />
                                </div>
                                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                        <span>01</span>
                                        <h6 className="text-light text-uppercase mb-0">January</h6>
                                        <span>2045</span>
                                    </div>
                                    <a className="h5 text-uppercase text-light" href="">Sed amet tempor amet sit kasd sea lorem</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item">
                                <div className="position-relative overflow-hidden rounded-top">
                                    <img className="img-fluid" src={BlogImg2} alt="" />
                                </div>
                                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                        <span>01</span>
                                        <h6 className="text-light text-uppercase mb-0">January</h6>
                                        <span>2045</span>
                                    </div>
                                    <a className="h5 text-uppercase text-light" href="">Sed amet tempor amet sit kasd sea lorem</a>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12">
                            <nav aria-label="Page navigation">
                            <ul className="pagination pagination-lg justify-content-center m-0">
                                <li className="page-item disabled">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                                </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                                </a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <Sidebar />
                
            </div>
        </div>
        </>
    )
}

export default Blog