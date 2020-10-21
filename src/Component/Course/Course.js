import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const { course, picture, balance, name, phone } = props.course;
    const handleOnClick = props.handleOnClick;
    
    return (
        <div className="row row-cols-1 row-cols-sm-1" style={{margin:'30px', marginLeft:'50px', width:'240px',height:'320px'}}>
            <div className="col mb-3">
                <div className="card">
                    <div className="container">
                        <img src={picture} className="card-img-top image text-center" alt="Avatar" style={{width:'160px', height:'160px', margin:'0 auto'}}></img>
                        <div className="middle">
                            <div className="text">{name.first} {name.last}</div>
                            <div className='text'><FontAwesomeIcon icon={faMobileAlt}/> {phone}</div>
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