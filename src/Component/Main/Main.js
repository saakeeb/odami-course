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
        <div className='main-section bg-light'>
            <div className='course-section text-center' style={{margin:'20px auto', padding:'20px'}}>
                {
                    courses.map(course=> <Course 
                        course={course}
                        handleOnClick={handleOnClick}
                        key={course._id}>
                        </Course>)
                }
            </div>
            <div className='cart-section'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;