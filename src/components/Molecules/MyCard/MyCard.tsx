import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconText from '../IconText/IconText';
import Image from '../../Atoms/Image/Image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
interface Props{
  src:string,
  name:string,
  author:string,
  duration:string,
  alt:string
}

function MyCard(props:Props) {
    return (
        <div>
    <Card sx={{ maxWidth: 284 }} >
        <Image alt={props.alt} path={props.src} width='100%' />
   
        <CardContent>
            <Typography  variant="subtitle1">
            {props.name}
            </Typography>

            <Typography  variant="body1">
            {props.author}
            </Typography>

              <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
              <IconText variant='caption' info={props.duration} ><AccessTimeIcon /></IconText>
             </div>
        </CardContent>
   <MoreHorizIcon style={{marginLeft:'88%'}} />
        </Card> 
      </div>
    );
}

export default MyCard;