import React from 'react';

interface Source{
    path:string,
    width?:string,
    height?:string,
    className?:string,
    alt:string
}
export const Image=(props:Source)=> {
    return (
        <img src={props.path} alt={props.alt} width={props.width} height={props.height} 
        className={props.className} />
    );
}

export default Image;