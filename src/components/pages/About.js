import React from 'react'
import './About.css'
import videoq from '../image/vd.mp4'
import c from '../image/c.png';
import kivy from '../image/kivy.png'
import android from '../image/Android.jpg'
import android_P from '../image/android.png'
import db from '../image/db.jpg';
import web from '../image/web.jpg';
import firebase from '../image/firebase.png';
import node from '../image/nodeja.png';
import reactjs from '../image/reactjs.png';
import python from '../image/python.png';
import native from '../image/reactnative.png'
import './Project.css';

import CardItem from './CardItem';
import Footer from '../Footer';

const About = () => {
    var scrollTop = function () {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            {scrollTop}
            <div className='third_div'>
                <h1 className='header'>SHASHWAT ANAND</h1>
                <video className='videoq' src={videoq} autoPlay loop muted />
            </div>
            <hr
                style={{
                    color: 'white',
                    backgroundColor: 'white',
                    height: 5,
                }}
            />
            <div className='first_div'>
                <h1 style={{ paddingTop: '8%', color: 'white', paddingBottom: -5, fontFamily: 'Amatic SC' }}>ABOUT ME</h1>
                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <hr
                        style={{
                            color: 'red',
                            backgroundColor: 'red',
                            height: 5,
                            width: '30%'
                        }}
                    />
                </div>
                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', paddingLeft: '10%', paddingRight: '10%' }}>
                    <p class="card-text" style={{ color: 'white', fontFamily: 'Dancing Script', fontSize: 30, alignItems: 'center' }}>A web and Android developer who has inquisitiveness to acquire new technologies and enthusiasm and zeal towards coding and gaming. Inclined towards solving real-life issues and matters through algorithms and programming. One can witness the readiness I have for the forthcoming and advanced technologies such as augmented reality, virtual reality and cloud computing. I am interested in the Microsoft underwater data centre project and reuseable spacecraft of Space X. I retain a technical view of looking at the world which reflects my commitment to my profession.</p>
                </div>
                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <hr
                        style={{
                            color: 'red',
                            backgroundColor: 'red',
                            height: 5,
                            width: '100%'
                        }}
                    />
                </div>
                <h1 style={{ paddingBottom: '5%', paddingTop: '2%', color: 'white', fontFamily: 'Amatic SC' }}>SKILL</h1>

                <div className='skill'>
                    <div className='skill_1'>
                        <img src={firebase} alt=' ' style={{ width: '10rem'}} />
                        <progress value={20} max="100" style={{ width: 40, paddingLeft: '70%' }} />
                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>Firebase</text>


                    <div className='skill_1'>
                        <img src={node} alt=' ' style={{ width: '10rem'}} />
                        <progress value={20} max="100" style={{ width: 40, paddingLeft: '70%' }} />

                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>Node js</text>
                    <div className='skill_1'>
                        <img src={reactjs} alt=' ' style={{ width: '10rem'}} />
                        <progress value={45} max="100" style={{ width: 40, paddingLeft: '70%' }} />
                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>React JS</text>

                    <div className='skill_1'>
                        <img src={python} alt=' ' style={{ width: '10rem'}} />
                        <progress value={45} max="100" style={{ width: 40, paddingLeft: '70%' }} />

                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>Python</text>

                    <div className='skill_1'>
                        <img src={native} alt=' ' style={{  width: '10rem' }} />
                        <progress value={38} max="100" style={{ width: 40, paddingLeft: '70%' }} />

                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>React native</text>

                    <div className='skill_1'>
                        <img src={android_P} alt=' ' style={{  width: '10rem' }} />
                        <progress value={5} max="100" style={{ width: 40, paddingLeft: '70%' }} />

                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>Android Studio</text>
                    <div className='skill_1'>
                        <img src={kivy} alt=' ' style={{  width: '10rem'}} />
                        <progress value={20} max="100" style={{ width: 40, paddingLeft: '70%' }} />
                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>Kivi</text>

                    <div className='skill_1'>
                        <img src={c} alt=' ' style={{  width: '10rem'}} />
                        <progress value={30} max="100" style={{ width: 40, paddingLeft: '70%' }} />
                    </div>
                    <text style={{ paddingBottom: '5%', color: 'white' }}>C programming</text>


                    <div className='cards_about' >
                        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: 15 }}>
                            <hr
                                style={{
                                    color: 'red',
                                    backgroundColor: 'red',
                                    height: 5,
                                    width: '100%',

                                }}
                            />
                        </div>
                        <h1 style={{ color: 'white', fontFamily: 'Amatic SC' }}>SERVICES</h1>

                        <div className='cards__container_about'>
                            <ul className='cards__items'>
                                <CardItem
                                    src={android}
                                    text='Android Developement'

                                />

                            </ul>
                            <ul className='cards__items'>
                                <CardItem
                                    src={web}
                                    text='Web Developement'
                                />

                            </ul>
                            <ul className='cards__items'>
                                <CardItem
                                    src={db}
                                    text='Database management like Firebase or SQL'
                                />

                            </ul>

                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', margin: 0 }}>
                    <Footer />
                </div>
            </div>
        </div>


    )
}
export default About;