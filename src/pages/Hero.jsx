import React from 'react'

const Hero = (props) => {
  return (
    <>
    <div className="container-fluid bg-primary p-5 bg-hero mb-5">
        <div className="row py-5">
            <div className="col-12 text-center">
                <h1 className="display-2 text-uppercase text-white mb-md-4">{props.pageTitle}</h1>
                {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                <a href="" className="btn btn-light py-md-3 px-md-5">Trainers</a> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero