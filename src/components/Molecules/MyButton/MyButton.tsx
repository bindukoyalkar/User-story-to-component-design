import { Button } from '@mui/material';
import React from 'react';

interface Props{
    variant:"text"|"contained" |"outlined",
    children?:any,
    info:string,
    className?:any
}

function MyButton(props:Props) {
  const handleClick=() => console.log("clicked "+ props.info+" button")
    return (
        <>
       <Button variant={props.variant} sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} onClick={handleClick} startIcon={props.children}>{props.info}</Button>
        </>
    );
}

export default MyButton;