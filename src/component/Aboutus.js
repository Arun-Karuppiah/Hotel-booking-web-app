import React from 'react';
import roomImage from './tajhotel.webp';
import restaurantImage from './htl.jpg';
import fitnessImage from './fcsm.jpg';
import freewifiImage from './fwifi.jpg';
import receptionImage from './recep.jpg';
import serviceImage from './serv.jpg';
import Header from './Header';
import './Aboutus.css'

const AboutUs = () => {
  return (
  <>
    

    <div>

    <div className='bgclr' style={{height:"150px"}}>
      <h1 style={{textAlign:"center",paddingTop:"30px"}}>FEATURES</h1>
      <h3 style={{textAlign:"center",paddingTop:"10px"}}>Welcome to our hotel, where comfort and luxury come together!</h3>
    </div>

    <div className="stpart1">
        <div className="image1">
          <img src={roomImage} style={{width:"750px",height:"450px"}}/>
        </div>
  
        <div className="text1">
          <h1><span style={{color:"#160f0f"}}>SPACIAL ROOMS</span><span style={{color:"#DAA520"}}> WITH </span><span style={{color:"#DAA520"}}>BEAUTIFUL </span>VIEWS</h1>
          <p style={{fontSize:"26px"}}>Enjoy the spacial elegance of the rooms with exhilarating views.</p>
        </div>
    </div>
    
    <div className="stpart2">
        <div className="image2">
          <img src={restaurantImage} style={{width:"750px",height:"450px"}}/>
        </div>
  
        <div className="text2">
          <h1><span style={{color:"#160f0f"}}>ON-SITE</span><span style={{color:"#ebcd0c"}}> RESTAURANT SERVING </span>DELICIOUS CUISINES</h1>
          <p style={{fontSize:"26px"}}>Treat your appetite with appetizing recipes of international cuisines</p>
        </div>
    </div>

    <div className="stpart1">
        <div className="image1">
          <img src={fitnessImage} style={{width:"750px",height:"450px"}}/>
        </div>
  
        <div className="text1">
          <h1><span style={{color:"#160f0f"}}>FITNESS CENTER</span><span style={{color:"#DAA520"}}> AND </span><span style={{color:"#DAA520"}}>SWIMMING </span>POOL</h1>
          <p style={{fontSize:"26px"}}>Pump up your muscle and take a quick dive.</p>
        </div>
    </div>

    <div className="stpart2">
        <div className="image2">
          <img src={freewifiImage} style={{width:"750px",height:"450px"}}/>
        </div>
  
        <div className="text2">
          <h1><span style={{color:"#160f0f"}}>FREE WIFI</span><span style={{color:"#ebcd0c"}}> THROUGHOUT THE </span>HOTEL</h1>
          <p style={{fontSize:"26px"}}>Enjoy seamless streaming of content with our free wifi.</p>
        </div>
    </div>

    <div className="stpart1">
        <div className="image1">
          <img src={receptionImage} style={{width:"750px",height:"450px"}}/>
        </div>
  
        <div className="text1">
          <h1><span style={{color:"#160f0f"}}>24-HOUR</span><span style={{color:"#DAA520"}}> FRONT </span><span style={{color:"#DAA520"}}>DESK </span>SERVICES</h1>
          <p style={{fontSize:"26px"}}>Feel free to approach our 24/7 customer service if you need any kind of help.</p>
        </div>
    </div>

    <div className="stpart2">
        <div className="image2">
          <img src={serviceImage} style={{width:"750px",height:"450px"}}/>
        </div>
  
        <div className="text2">
          <h1><span style={{color:"#160f0f"}}>CONCIERGE SERVICES</span><span style={{color:"#ebcd0c"}}> TO HELP </span>YOUR STAY</h1>
          <p style={{fontSize:"26px"}}>Plan everything on your stay and journey with our concierges.</p>
        </div>
    </div>

    </div>
    </>
  );
};

export default AboutUs;
