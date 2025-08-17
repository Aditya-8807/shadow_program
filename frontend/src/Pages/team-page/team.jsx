import React from 'react';
import "./team.css";
import Aadit from './image/Aadit.jpg';
import Aastha from './image/Aastha.jpg';
import Aditya from './image/Aditya.png';
import JasnoorKaur from './image/JasnoorKaur.jpg';
import Kapil from './image/Kapil.jpg';
import karthik_vaishnav from './image/karthik_vaishnav.jpg';
import Manas from './image/Manas.jpg';
import Ridham from './image/Ridham.jpg';
import Rutika from './image/Rutika.jpg';
import Srishti from './image/Srishti.jpg';
import vaibhavweb from './image/vaibhavweb.png';
import Vaibhav from './image/Vaibhav.jpg';
import vanshika from './image/vanshika.jpg';
import tarun from './image/Tarun.jpg';
import arush from './image/arush.png';
import khushi from './image/khushi.png';

import {
    FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub
} from 'react-icons/fa';
export default function TeamPage() {

    return <main>

        <div className="header">
            <div className="title-container">
                <h1> MEET OUR TEAM</h1>
            </div>
            <h4>Our Team, Your Partners in Progress</h4>
        </div>
        <div className='body'>
            <div className="overall-cordi">
                <div className="card">
                    <img src={karthik_vaishnav} className="member-img" />
                    <h4>Kartik Vaishnav</h4>
                    <p>SARC Overall Coordinator 2025-26</p>
                    <div className="social-icons-team">
                        <a href="https://www.facebook.com/kartik.vaishnav.140" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/kartik__vaishnav/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/kartik-vaishnav-12a758251/"
                         target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                    </div>
                       <div className="contact-details">
                       <p><FaPhoneAlt /> +91 88157 26072</p>
                      
                       </div>
                </div>


            </div>

            <div className="asmp">
                <h1>ASMP Team</h1>
                <div className='ctm-grid'>
                    <div className="card">
                        <img src={Aastha} className="member-img" />
                        <h4>Astha Maliwal</h4>
                        <p>SARC ASMP CTM 2025-26</p>
                        <div className="social-icons-team">
                            <a href='https://www.instagram.com/aasthamaliwal/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href='https://www.linkedin.com/in/aastha-maliwal-2ba2b0287/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                        </div>
                         <div className="contact-details">
                       <p><FaPhoneAlt /> +91 94035 21022</p>
                      
                       </div>
                    </div>
                    <div className="card">
                        <img src={Aadit} className="member-img" />
                        <h4>Adit Sule</h4>
                        <p>SARC ASMP CTM 2025-26</p>
                        <div className="social-icons-team">
                            <a href="https://www.instagram.com/aaadit_s/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/aadit-sule/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                        </div>
                         <div className="contact-details">
                       <p><FaPhoneAlt /> +91 84595 39918</p>
                      
                       </div>
                    </div>
                </div>
                <div className="asmp-cordi">

                    <div className='cordi-grid'>
                        <div className="card">
                            <img src={JasnoorKaur} className="member-img" />
                            <h4>Jasnoor Kaur</h4>
                            <p>SARC ASMP Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href='https://www.instagram.com/_noor._.78/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href= 'https://www.linkedin.com/in/jasnoor-kaur-24b40734a/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                            </div>
                             <div className="contact-details">
                       <p><FaPhoneAlt /> +91 98149 72319</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={ Manas} className="member-img" />
                            <h4>Manas Gupta</h4>
                            <p>SARC ASMP Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href='https://www.instagram.com/manasgupta1014/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href='https://www.linkedin.com/in/manas-gupta-bb487b317' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                            </div>
                             <div className="contact-details">
                       <p><FaPhoneAlt /> +91 93511 02913</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={Ridham } className="member-img" />
                            <h4>Ridham Saxena</h4>
                            <p>SARC ASMP Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href='https://www.instagram.com/ridham.2006/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href='https://www.linkedin.com/in/ridham-saxena-5a1555318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                            </div>
                             <div className="contact-details">
                       <p><FaPhoneAlt />+91 94256 01681</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={Srishti} className="member-img" />
                            <h4>Srishti Poddar</h4>
                            <p>SARC ASMP Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href='https://www.instagram.com/srishtipodda.r/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href='https://www.linkedin.com/in/srishti-poddar-855944260/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                            </div>
                             <div className="contact-details">
                       <p><FaPhoneAlt />  +91 63592 63317</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={Vaibhav } className="member-img" />
                            <h4>Vaibhav Kumar</h4>
                            <p>SARC ASMP Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href='https://www.instagram.com/fr._.vaibhav/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href='https://www.linkedin.com/in/vaibhav-kumar-6a7b84330/'target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

                            </div>
                             <div className="contact-details">
                       <p><FaPhoneAlt /> +91 93527 22250</p>
                      
                       </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="web">
                <h1>WEB Team</h1>
                <div className='ctm-grid'>
                    <div className="card">
                        <img src={khushi} className="member-img" />
                        <h4>Khushi Yadav</h4>
                        <p>SARC Web CTM 2025-26</p>
                        <div className="social-icons-team">

                            <a href='https://www.instagram.com/yadavk_18/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href= 'https://www.linkedin.com/in/khushi-yadav-0275b6293/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="https://github.com/KhushiYadav18" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                        </div>
                        <div className="contact-details">
                       <p><FaPhoneAlt />  +91 89300 97733</p>
                      
                       </div>
                    </div>
                    <div className="card">
                        <img src={arush} className="member-img" />
                        <h4>Arush Srivastav</h4>
                        <p>SARC Web CTM 2025-26</p>
                        <div className="social-icons-team">
                            <a href='https://www.instagram.com/itss.arushhh/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href='https://www.linkedin.com/in/arush-narayan-srivastav-001/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="https://github.com/arushsri" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                        </div>
                        <div className="contact-details">
                       <p><FaPhoneAlt /> +91 90055 49919</p>
                      
                       </div>
                    </div>
                </div>
                <div className="web-cordi">


                    <div className='cordi-grid'>
                        <div className="card">
                            <img src={Aditya} className="member-img" />
                            <h4>Aditya Chaurasiya</h4>
                            <p>SARC Web Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href="https://www.instagram.com/adityachaurasiya.8807/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/aditya-chaurasiya-70785531b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="https://github.com/Aditya-8807" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                            </div>
                            <div className="contact-details">
                       <p><FaPhoneAlt />  +91 79919 56691</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={Kapil} className="member-img" />
                            <h4>Kapil Chhipa</h4>
                            <p>SARC Web Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href="https://www.instagram.com/kapi_lchhipa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/kapil-chhipa-05a741330/"target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="https://github.com/kapilgit1234" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                            </div>
                            <div className="contact-details">
                       <p><FaPhoneAlt /> +91 99509 13954</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={Rutika} className="member-img" />
                            <h4>Rutika Hake</h4>
                            <p>SARC Web Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href="https://www.instagram.com/rutikahake" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/rutika-hake-990787322" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="https://github.com/Rutika-H" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                            </div>
                            <div className="contact-details">
                       <p><FaPhoneAlt />+91 87671 53010</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={tarun} className="member-img" />
                            <h4>Tarun Kadam</h4>
                            <p>SARC Web Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href="https://www.instagram.com/tarunkadam06" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/tarun-kadam-657a44330" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="https://github.com/TarunKadam" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                            </div>
                            <div className="contact-details">
                       <p><FaPhoneAlt />  +91 77579 49693</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={vaibhavweb} className="member-img" />
                            <h4>Vaibhav Singh </h4>
                            <p>SARC Web Coordinator 2025-26</p>
                            <div className="social-icons-team">

                                <a href='https://www.instagram.com/cheekycaibhav/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href='https://www.linkedin.com/in/vaibhavsingh776/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="https://github.com/vaibhavsingh777" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                            </div>
                            <div className="contact-details">
                       <p><FaPhoneAlt /> +91 90820 00452</p>
                      
                       </div>
                        </div>
                        <div className="card">
                            <img src={vanshika} className="member-img" />
                            <h4>Vanshika Nalamasa </h4>
                            <p>SARC Web Coordinator 2025-26</p>
                            <div className="social-icons-team">
                                <a href="https://www.instagram.com/vanshikazz0405" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/vanshika-nalamasa-04b6bb326" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="https://github.com/VanshikaNalamasa" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                            </div>
                            <div className="contact-details">
                       <p><FaPhoneAlt /> +91 99896 83662</p>
                      
                       </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </main>
}