import { Typography } from '@mui/material';
import React from 'react';
import Icons from '../../Atoms/Icons/Icons';
interface Props{
    children:any,
    info:string,
    variant:'caption'|'body2',
    className?:any
}
function IconText(props:Props) {
    return (
            <Typography variant={props.variant} >
            <Icons>{props.children}</Icons>
            {props.info}
            </Typography>
    );
}

export default IconText;