import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

// import BlogImg1 from '../img/blog-1.jpg';
// import BlogImg2 from '../img/blog-2.jpg';
// import BlogImg3 from '../img/blog-3.jpg';



const BlogSection = () => {
    const [datas, setDatas] = useState([]);
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
    const getFoodData = async () => {
        try{
            const response = await axios.get('https://blogsapi.p.rapidapi.com/', {
                headers: {
                    'X-RapidAPI-Key': 'd2a3f2eb85msh1846beff64b580bp1bece8jsn539e5d595303',
                },
            })
            // console.log(response.data.results);
            setDatas(response.data.results);
        }
        catch (error){
            console.error(error);
        }
    }
    
    useEffect(() =>{
        getFoodData();
    },[])
    return (
        <>
        <div className="container-fluid p-5">
            <div className="mb-5 text-center">
                <h5 className="text-primary text-uppercase">Our Blog</h5>
                <h1 className="display-3 text-uppercase mb-0">Latest Blog Post</h1>
            </div>
            <div className="row g-5">
                {
                    datas.slice(0, 6).map((data) => (
                        <div className="col-lg-4" key={data.id}>
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
                                    <NavLink className="h5 text-uppercase text-light" to={`/blog/${data.id}`}>{data.title}</NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
                {/* <div className="col-lg-4">
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
                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden rounded-top">
                            <img className="img-fluid" src={BlogImg3}alt="" />
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
            </div>
        </div>
        </>
    )
}

export default BlogSection