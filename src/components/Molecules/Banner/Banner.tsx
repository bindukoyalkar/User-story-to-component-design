import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../../Atoms/Image/Image';
interface Props{

}


const Banner=(props:Props)=> {
    return (
        <>
        <div>
            <Container  style={{backgroundColor:'#F1F6F4',width:'912px',height:'264px'}}>
                <Grid container>
                    <Grid item md={8}>
                        <Typography style={{height: '90px',width: '450px',
        paddingLeft: '35px',paddingTop: '35px',fontSize: '34px',fontStyle: 'normal',fontWeight: '700',
        lineHeight: '45px',textAlign: 'left',}} variant='h1'>
                           Which books should we blink next?</Typography>
            </Grid>
            
            <Grid item md={4}>
            <Image/>
                    </Grid>
                </Grid>
            </Container>
        </div>

        </>
    );
}

export default Banner;