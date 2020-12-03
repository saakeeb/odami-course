import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import courseData from '../Fakedata/ShuffleData';
import './Main.css'

const Main = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        setCourses(courseData);
    },[])
    const handleOnClick = (course)=>{
        const newCart = [...cart, course];
        setCart(newCart);
    }


    return (
        <div className='main-section bg-light' style={{marginBottom:'4rem', paddingBottom:'4rem'}}>
            <div className='course-section text-center row' >
                {
                    courses.map(course=> <Course 
                        course={course}
                        handleOnClick={handleOnClick}
                        key={course._id}>
                        </Course>)
                }
            </div>
            <div className='cart-section text-center cart' style={{margin:'0 auto',top:'auto', left:'auto', right:"25px",paddingBottom:'6rem'}}>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;