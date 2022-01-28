import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import one from '../../Atoms/Image/1.png';
import IconText from '../IconText/IconText';
interface Props{

}

function MyCard(props:Props) {
    return (
        <div>
    <Card sx={{ maxWidth: 284 }} >
        <img alt="book one" src={one} width='100%' />
   
        <CardContent>
            <Typography  variant="subtitle1">
            Masters of Scale
            </Typography>

            <Typography  variant="body1">
            Reid Hoffman
            </Typography>

              <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
                <IconText/>
            </div>
        </CardContent>
   <MoreHorizIcon style={{marginLeft:'88%'}} />
        </Card> 
      </div>
    );
}

export default MyCard;