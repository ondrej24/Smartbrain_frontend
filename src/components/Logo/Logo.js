import React from "react";
import logo from './logo.png';
import Tilt from 'react-parallax-tilt';


const Logo = () => {
    const imgWidth = 150;
    return(
        <div className= 'ml5' style={{display: 'flex', width: `${imgWidth}px`}}>
            <Tilt 
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.02}>
                <div>
                    <div className='shadow-5' style={{display: 'flex'}}>
                        <img alt='logo' src={logo}/>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;