import { Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
interface Props{

}
function IconText(props:Props) {
    return (
        <>
            <Typography variant='body2' style={{ verticalAlign: 'middle',
        display: 'inline-flex',
        paddingTop:'1%'}}>
            <AccessTimeIcon/>
            13-minute read
            </Typography>
        </>
    );
}

export default IconText;