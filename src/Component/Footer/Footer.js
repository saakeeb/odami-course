import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
                <div className="footer-section" style={{display:'flex', margin:'30px auto'}}>
                    <div className='footer-catagories'>

                        <ul className="styled-list link-column ">
                            <li>
                                <a href="#" target="_blank" rel="noopener" data-placement="footer">
                                Odami for Business</a>
                            </li>
                            <li>
                                <a href="#">
                                    Teach on Odami</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Get the app </a>
                            </li>
                            <li>
                                <a href="#">
                                    About us </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact us</a>
                            </li>
                        </ul>

                        <ul class="unstyled-list link-column ">
                            <li>
                                <a href="#">
                                    Careers</a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog </a>
                            </li>
                            <li>
                                <a href="#">
                                    Help and Support</a>
                            </li>
                            <li>
                                <a href="#">
                                    Affiliate</a>
                            </li>
                        </ul>

                        <ul class="unstyled-list link-column ">
                            <li>
                                <a href="#">
                                    Terms</a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy policy and cookie policy</a>
                            </li>
                            <li>
                                <a href="#">
                                    Sitemap</a>
                            </li>
                            <li>
                                <a href="#">
                                    Featured courses</a>
                            </li>
                        </ul>
                    </div>

                    <div style={{margin:'1rem 6rem'}}>
                        <div >
                            <h1><a href="#" style={{color:'black', textDecoration:'none'}}>Odami Course</a></h1>
                        </div>
                        <div style={{textDecoration:'center', padding:'5px'}}> © 2020 Odami, Inc.</div>
                    </div>
                </div>
    );
};

export default Footer;