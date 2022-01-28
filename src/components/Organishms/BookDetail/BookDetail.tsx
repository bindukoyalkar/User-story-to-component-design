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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MenuItem, Select, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 450,
  bgcolor: 'background.paper',
  p: 4,
};

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick= (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,val:string)=> console.log(val)
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
                    <Button variant="contained" onClick={e=>handleClick(e,"clicked read now button")} style={{ marginRight:'2%',fontWeight:'400', marginTop:'6%'}} >Read now</Button>
                    <Button variant="outlined" onClick={e=>handleClick(e,"clicked buy book button")} style={{marginRight:'2%',fontWeight:'400', marginTop:'6%'}} startIcon={<ShoppingCartIcon/>}>Buy Book</Button>
                    <Button variant="text" onClick={handleOpen} style={{ color:'black', fontWeight:'400', marginTop:'6%'}} endIcon={<ArrowForwardIcon />}>Send to Kindle</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="subtitle2" component="h2">
           Setup Your Kindle
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Send blinks right to your Kindle from within the app. 
           </Typography>
           <Typography variant='body1'>
          1.Add Blinkist to your approved document senders</Typography>

          <Typography variant='body2'>
          You must add kindle@blinkist.com to your list of approved document senders to receive documents sent from Blinkist
          </Typography>

          <Typography variant='body1'>
          2.Add your Kindle email
          </Typography>
          <Container>
            <Grid container>
              <Grid md={6}>
          <TextField label="email" variant="filled" />
          </Grid>
          <Grid md={6}>
          <Select
          value=""
          displayEmpty>
          <MenuItem value="">@kindle.com</MenuItem>
          <MenuItem>@gmail.com</MenuItem>
          <MenuItem >@yahoo.com</MenuItem>
        </Select>
          </Grid>
          </Grid>
          </Container>
          <br></br>
          <Button style={{width:"100%"}} onClick={e=>handleClick(e,"clicked add email button")}  variant='contained'>Add email</Button>
          <Button style={{width:"100%"}} onClick={e=>handleClick(e,"clicked help button")} variant='text'>Need help?</Button>
        </Box>
      </Modal>
                    <MyTabs/>
                    
                  </Grid>
                <Grid item md={4}>
                <Image alt="book one" path={one} className={classes.image}/>
                </Grid>
                </Grid>
            </Container>

               </div>
    );
}

export default BookDetail;