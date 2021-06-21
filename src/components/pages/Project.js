import React from 'react';
import './Project.css';
import CardItem from './CardItem';

import libary from '../image/Camera Roll/lb.png';
import libary_q from '../image/Camera Roll/lb2.png';

import dum1 from '../image/Dum/1.png';
import dum3 from '../image/Dum/3.png';


import fbauth from '../image/Firebase Auth page/1.png'
import fbauth1 from '../image/Firebase Auth page/2.png'

import kivy1 from '../image/Kivy/1.png'
import kivy2 from '../image/Kivy/2.png'

import photo_feed1 from '../image/Saved Pictures/1.png'
import photo_feed2 from '../image/Saved Pictures/2.png'

import python from '../image/Screenshots/1.png'
import python1 from '../image/Screenshots/2.png'

import social_media1 from '../image/Social Media/1.png'
import social_media2 from '../image/Social Media/2.png'


const Project = () => {
  var scrollTop = function () {
    window.scrollTo(0, 0);
};
  return (
    <div className='cards'>
      {scrollTop}
      <h1 style={{ fontFamily: 'monospace', color: 'white' }}>PROJECT</h1>
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
        <h2 style={{ fontFamily: 'monospace', color: 'white' }}>Python Project</h2>
        <div className='cards__wrapper'>
          <CardItem
            src={python}

          />
          <CardItem
            src={python1}

          />
        </div>
      </div>
      <hr
        style={{
          color: 'red',
          backgroundColor: 'red',
          height: 5
        }}
      />
      <div className='cards__container'>
        <h2 style={{ fontFamily: 'monospace', color: 'white' }}>React.js Project</h2>
        <div className='cards__wrapper'>

          <CardItem
            src={dum1}

          />

          <CardItem
            src={dum3}

          />

        </div>
      </div>
      <hr
        style={{
          color: 'red',
          backgroundColor: 'red',
          height: 5
        }}
      />

      <div className='cards__container'>
        <h2 style={{ fontFamily: 'monospace', color: 'white', paddingBottom: 10 }}>React Native Project</h2>
        <h3 style={{ fontFamily: 'monospace', color: 'white', paddingTop: 20 }}>1-Social Media</h3>
        <div className='cards__wrapper'>

          <CardItem
            src={social_media1}

          />

          <CardItem
            src={social_media2}

          />

        </div>
        <h3 style={{ fontFamily: 'monospace', color: 'white', paddingTop: 20 }}>2-Photo Feed Application</h3>
        <div className='cards__wrapper'>

          <CardItem
            src={photo_feed1}

          />

          <CardItem
            src={photo_feed2}

          />

        </div>

        <h3 style={{ fontFamily: 'monospace', color: 'white', paddingTop: 20 }}>3-Libary Management System</h3>
        <div className='cards__wrapper'>

          <CardItem
            src={libary}

          />

          <CardItem
            src={libary_q}

          />

        </div>
        <h3 style={{ fontFamily: 'monospace', color: 'white', paddingTop: 20 }}>4-Firebase Authentication </h3>
        <div className='cards__wrapper'>

          <CardItem
            src={fbauth}

          />

          <CardItem
            src={fbauth1}

          />

        </div>
        <hr
          style={{
            color: 'red',
            backgroundColor: 'red',
            height: 5
          }}
        />
        <div className='cards__container'>
          <h2 style={{ fontFamily: 'monospace', color: 'white' }}>5-Kivy Project</h2>
          <div className='cards__wrapper'>

            <CardItem
              src={kivy1}

            />

            <CardItem
              src={kivy2}

            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;