import React from 'react'
import './About.css'
import './certificate.css'
import './Project.css';


import q from '../image/Important/1.jpg';
import w from '../image/Important/2.jpg';
import e from '../image/Important/3.jpg';
import r from '../image/Important/4.jpg';
import t from '../image/Important/5.jpg';
import y from '../image/Important/6.jpg';
import u from '../image/Important/7.jpeg';
import i from '../image/Important/8.png';
import CardItem from './CardItem';

function certificate() {
    var scrollTop = function () {
        window.scrollTo(0, 0);
    };
    return ( 
        <div className='cards'>
            {scrollTop}
            <h1 style={{ color: 'white', fontFamily: 'Dancing Script' }}>CERTIFICATE</h1>
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: 20 }}>
                <hr
                    style={{
                        width: 50,
                        color: 'red',
                        backgroundColor: 'red',
                        height: 5
                    }}
                />
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <CardItem
                        src={q}
                    />
                    <CardItem
                        src={w}
                    />
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <CardItem
                        src={i}
                    />
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <CardItem
                        src={e}
                    />
                    <CardItem
                        src={r}
                    />
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <CardItem
                        src={t}
                    />
                    <CardItem
                        src={y}
                    />
                </div>
                <div className='cards__wrapper'>
                    <CardItem
                        src={u}
                    />
                </div>

            </div>
        </div>
    )
}

export default certificate

