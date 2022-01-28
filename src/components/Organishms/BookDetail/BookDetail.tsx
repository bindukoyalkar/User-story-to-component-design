import {  Typography, Button ,Grid, Container } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import one from '../../Atoms/Image/1.png'
import HeadsetIcon from '@mui/icons-material/Headset';
import MyTabs from '../../Molecules/MyTabs/MyTabs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from '../../Atoms/Image/Image';
import IconText from '../../Molecules/IconText/IconText';
interface Props{
    src:string,
    alt:string,
    name:string,
    author:string,
    duration:string,
    description:string
}
const useStyles = makeStyles((theme) => ({
    body2:{
        height: '20px',
        width: '168px',
        textAlign: 'left',
    },
    heading:{
        textAlign: 'left',
        paddingTop:'4%',
        
    },
    content:{
        height: '100px',
        width: '600px',
        left: '264px',
        top: '624px',
    },
    dimensions:{
        width:'304px',
        height:'304px'
    },
    sub2:{
        fontWeight:'400',
        paddingTop:'3%'
    }
    ,
    wrapIconLeft: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        marginTop:'2%'
     },
     author:{
         paddingTop:'1%'
     },
     image:{
         paddingTop:'25%',
         width:'284px',
         height:'284px'
     }

}))
const BookDetail=(props:Props)=> {
    const classes= useStyles();
   
    return (
        <div style={{marginLeft:'150px', marginTop:'75px'}}>
            <Container>
                <Grid container>
                    <Grid item md={7}>
                    <Typography variant='body2' className={classes.body2}>Get the key ideas from</Typography>
                    <Typography className={classes.heading} variant='h1'>{props.name}</Typography>
                    <Typography variant="subtitle2" className={classes.sub2}>{props.description}</Typography>
                    <Typography variant='body1' className={classes.author}>{props.author}</Typography>
                    <IconText variant='caption' className={classes.wrapIconLeft} info={props.duration} ><AccessTimeIcon /></IconText>
                    <IconText variant='caption' className={classes.wrapIconLeft} info='Audio available' ><HeadsetIcon /></IconText>
                    <br></br>
                    <Button variant="contained" style={{ marginRight:'2%',fontWeight:'400', marginTop:'6%'}} >Read now</Button>
                    <Button variant="outlined" style={{marginRight:'2%',fontWeight:'400', marginTop:'6%'}} startIcon={<ShoppingCartIcon/>}>Buy Book</Button>
                    <Button variant="text" style={{ color:'black', fontWeight:'400', marginTop:'6%'}} endIcon={<ArrowForwardIcon />}>Send to Kindle</Button>
                    <MyTabs/>
                    <Typography variant='body2' className={classes.content}>Masters of Scale (2021) is part fascinating anecdote, part how-to guide for entrepreneurs who are preparing to launch their product or scale up their company. With case studies and stories behind some of the world’s biggest companies, it isolates the principles behind successfully scaling up.</Typography>
                  </Grid>
                <Grid item md={4}>
                <Image alt="book one" path={one} className={classes.image}/>
                </Grid>
                </Grid>
            </Container>
            <br></br>
            <br></br>
            
               </div>
    );
}

export default BookDetail;