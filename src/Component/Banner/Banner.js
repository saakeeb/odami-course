import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
            <div className="col-sm-12">
                <div className="hovereffect">
                    <img style={{margin:'0 auto'}}className="img-responsive" src='https://image.shutterstock.com/image-vector/elearning-online-education-home-modern-260nw-1680752509.jpg' alt=""></img>
                    <div className="overlay">
                        <h2>Learn with Fun</h2>
                        <a className="info" href="#">Anywhere, anytime. Start learning today!</a>
                    </div>
                </div>
            </div>
            );
};

export default Banner;