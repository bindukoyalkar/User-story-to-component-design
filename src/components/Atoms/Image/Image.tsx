import React from 'react';
import banner from '../../Atoms/Image/banner.png'
interface Source{

}
export const Image=(props:Source)=> {
    return (
        <img src={banner} alt="banner" style={{height:'264px' , width:'320px', top:'17px',left:'620px'}} />
    );
}

export default Image;