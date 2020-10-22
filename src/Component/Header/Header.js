import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Header = () => {
    return (
        <div style={{marginBottom:'10px'}}>
            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div ><h1><a href="#" style={{color:'black', textDecoration:'none'}}>Odami Course</a></h1></div>
                <a href="#" style={{textDecoration:'none'}} className='hoverable'><small>Catagories</small></a>
                <form className="form-inline my-2 my-lg-0">
                    <input type="text" name="" className='form-control mr-sm-2' placeholder="Search Your Course" style={{ borderRadius:'15px', borderStyle:'none'}}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <a href="#" style={{textDecoration:'none'}}><small>Odami for Teachers</small></a>
                <a href="#" style={{textDecoration:'none'}}><small>Odami for Students</small></a>
                <form>
                    <button type="button" className="btn btn-outline-primary" style={{marginRight:'15px'}}>Log In</button>
                    <button type="button" className="btn btn-primary" style={{marginRight:'15px'}}>Sign Up</button>
                </form>
                
            </nav>
        </div>
    );
};

export default Header;