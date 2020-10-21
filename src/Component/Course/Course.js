import React from 'react';
import './Course.css';

const Course = (props) => {
    const { course, picture, balance, name, phone } = props.course;
    const handleOnClick = props.handleOnClick;
    
    return (
        <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-8">
                <div className="card">
                    <div className="container">
                        <img src={picture} className="card-img-top image" alt="Avatar"></img>
                        <div className="middle">
                            <div className="text">{name.first} {name.last}</div>
                            <div className='text'>{phone}</div>
                        </div>
                    </div>
                    
                    <div className="card-body text-center">
                        <h5 className="card-title">{course}</h5>
                        <h3>${balance}</h3>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>handleOnClick(props.course)}>Add cart</button>
                    </div>
                </div>
        </div>
            </div>
    );
};

export default Course;