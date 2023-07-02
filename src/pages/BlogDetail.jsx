import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import axios  from 'axios';

import BlogImg from '../img/blog-1.jpg';
import commentImg from '../img/user.jpg';

const BlogDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const getDetails = async () => {
        try{
            const response = await axios.get('https://blogsapi.p.rapidapi.com/', {
                params:{id : id},
                headers: {
                    'X-RapidAPI-Key': 'd2a3f2eb85msh1846beff64b580bp1bece8jsn539e5d595303',
                },
            })
            console.log(response.data.results[0]);
            setData(response.data.results[0]);
        }
        catch (error){
            console.error(error);
        }
    }
    useEffect(() => {
        getDetails();
    },[id])
    return (
        <>
        <div className="container-fluid p-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    
                    <div className="mb-5">
                        <img className="img-fluid w-100 rounded mb-5" src={data.image} alt="" />
                        <h1 className="text-uppercase mb-4">{data.title}</h1>
                        <p>{data.body}</p>
                    </div>
                    
                    <div className="mb-5">
                        <h3 className="text-uppercase mb-4">3 Comments</h3>
                        <div className="d-flex mb-4">
                            <img src={commentImg} className="img-fluid rounded" style={{width: '45px', height: '45px'}} />
                            <div className="ps-3">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-secondary">Reply</button>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <img src={commentImg} className="img-fluid rounded" style={{width: '45px', height: '45px'}} />
                            <div className="ps-3">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-secondary">Reply</button>
                            </div>
                        </div>
                        <div className="d-flex ms-5 mb-4">
                            <img src={commentImg} className="img-fluid rounded" style={{width: '45px', height: '45px'}} />
                            <div className="ps-3">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-secondary">Reply</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-dark rounded p-5">
                        <h3 className="text-light text-uppercase mb-4">Leave a comment</h3>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{height: '55px'}} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{height: '55px'}} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{height: '55px'}} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Leave Your Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
        </>
    )
}

export default BlogDetail