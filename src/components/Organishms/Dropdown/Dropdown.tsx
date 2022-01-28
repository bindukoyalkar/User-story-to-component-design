import React, { useState } from 'react';
import {Typography,Grid,Button, AppBar,CssBaseline ,Toolbar, Container, TextField, InputAdornment, createTheme, ThemeProvider } from '@mui/material'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import User from '../../Atoms/User/User'
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../Atoms/Image/logo.png'
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faBaby, faBriefcase, faBullseye, faCampground, faChartLine, faCoins
  , faComments, faFlask, faGlobeAsia, faGraduationCap, faHeadSideVirus, faHeart, faHourglassHalf,
   faLandmark, faLeaf, faLightbulb, faMonument, faPenFancy, faPiggyBank, faPrayingHands, faRocket, faShapes, faSignal, faSpa,  faUsers, faVectorSquare } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
    logo:{position: 'absolute',
      paddingLeft:'0.5%',
      paddingTop:'0.5%'
    },
    search:{color: 'black',
        position: 'absolute',
        height:'20px',
        width: '20px',
        top:'40%',
        cursor:'pointer'
    },
    explore:{
        color: 'black',
        position: 'absolute',
        textAlign: 'left',
        height:'20px',
        width: '57px',
        paddingTop:'0.5%',
        cursor:'pointer',
    },
    arrowUp:{
        height:'6.5px',
        width: '10.6px',
      color: 'black',
      position: 'absolute',
      top:'40%'
    },
    avatar: {
      position: 'absolute',
      height:'26px',
      width: '13px',
       },
    arrowDown:{
        height:'6.5px',
        width: '10.6px',
      color: 'black',
      position: 'absolute', top:'25%'
    },
    myLib:{
        color: 'black',
        position: 'absolute',
        textAlign: 'left',
        paddingTop:'0.5%',cursor:'pointer'
  },
    ul:{
        listStyleType:'none',padding:'0', margin:'0',fontWeight:'fontWeightLight'
    },
    category:{
        paddingTop:'5%',
        paddingBottom:'5%',
        borderBottom: '1px solid black',
        fontWeight:'fontWeightRegular',

  },
    category1:{
        paddingTop:'5%',
        paddingBottom:'5%',
        borderBottom: '1px solid black',
        fontWeight:'fontWeightRegular',
        color:'#116BE9'
  }
  })); 
  
const innerTheme = createTheme({
    palette: {
      primary: {
        main: '#6D787E',
      },
      secondary:{
          main: '#116BE9'
      }
    },
    typography:{
        button:{
            textTransform:'none'
          }
    }
  }); 

interface Props{
   
}

const Dropdown=(props:Props)=>{
    const [value,setValue]=useState(0);
    const [search, setSearch ]= useState(0);
    
    const classes=useStyles();
    const expandExplore=(e:React.MouseEvent<SVGSVGElement, MouseEvent>| React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        value===0 ? setValue(1): setValue(0)
        }
    
    const expandSearch=(e:React.MouseEvent<SVGSVGElement, MouseEvent>, val:number)=>{
      setSearch(val)
    }
    return (
        <>
    <CssBaseline />
    <AppBar  style={{ background: '#FFFFFF'}} position='relative' elevation={0}>
      <Toolbar>
          <Container style={{marginLeft:"13%", marginTop:'1%',}}>
            <Grid container >
                <Grid item md={1.5}>
                    <img alt="logo" className={classes.logo} src={logo} />
                </Grid>

                <Grid item md={0.5} >
                  <SearchOutlinedIcon onClick={(e) => {expandSearch(e,1)}} className={classes.search}/>
                </Grid>

              {search===0 && <> <Grid item md={0.75}  sx={{
                    ':hover': {
                      borderBottom:'3px solid #22C870'
                    },
                }}>
                <Typography className={classes.explore} 
                onClick={(e)=>expandExplore(e)} variant='body1'>Explore</Typography>
               
                </Grid>

                <Grid item md={0.25}>
                { value===0 && <KeyboardArrowDownIcon  className={classes.arrowUp}/>}
             { value===1 && <KeyboardArrowUpOutlinedIcon  className={classes.arrowUp}/>}
                </Grid>

                <Grid item md={0.25}>
                    </Grid>

                <Grid item md={0.75}>
                    <Typography className={classes.myLib} variant='body1'>My Library</Typography>
                </Grid> </>}
              
                {search===1 && <><Grid item md={5} >

                  <TextField fullWidth label="Search by title or author" variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CloseIcon onClick={(e) => {expandSearch(e,0)}} style={{cursor:'pointer'}}/>
                      </InputAdornment>
                  )}}
                    style={{ bottom:'20%'
                    }}
                    />
                </Grid></>}

                {search===0 &&<Grid item md={4}>
                </Grid>}

                {search===1 &&<Grid item md={1}>
                </Grid>}

                <Grid item md={0.5}>
                    <User />
                </Grid>

                <Grid item md={0.5}>
                    <KeyboardArrowDownIcon className={classes.arrowUp}/>
                </Grid>
            </Grid>
          </Container>
      </Toolbar>
    </AppBar>

 {value===1 &&  <div style={{backgroundColor:'#F1F6F4',position:'absolute', width:'100%',zIndex:1}}>
    <Container style={{marginLeft:'15%'}}>
    <ThemeProvider theme={innerTheme}>
    <Grid container>
        <Grid item md={3}>
            <Typography className={classes.category1} variant='body1'>Explore by category</Typography>
            <ul className={classes.ul}>
                <li key={1}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faRocket}/>}>Entrepreneurship</Button>
                </li> 
                <li key={2}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faFlask}/>}>Science</Button>
                </li>
                <li key={3}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faGlobeAsia}/>}>Economics</Button>
               </li>
                <li key={4}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faBriefcase}/>}>Corporate Culture</Button>    
                </li>
                <li key={5}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faPiggyBank}/>}>Money & Investments</Button>    
                </li> 
                <li key={6}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faHeart}/>}>Sex & Relationships</Button>    
                </li>
                 <li key={7}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faBaby}/>}>Parenting</Button>    
                </li> 
                <li key={8}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faPenFancy}/>}>Biography & Memoir</Button>    
                </li>
                <li key={9}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faPrayingHands}/>}>Religion & Spirituality</Button>  
               </li>
            </ul>
        </Grid>

        <Grid item md={3}>
            <Typography className={classes.category} variant='body1'>See recently added titles</Typography>
            <ul className={classes.ul}>
                <li key={1}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faLandmark}/>}>Politics</Button>
                </li>
                <li key={2}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faAppleAlt}/>}>Health & Nutrition</Button>
                  </li>
                <li key={3}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faMonument}/>}>History</Button>
                </li>
                <li key={4}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faVectorSquare}/>}>Management & Leadership</Button>
                </li>
                <li key={5}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faHeadSideVirus}/>}>Psychology</Button>
               </li>
                <li key={6}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faCoins}/>}>Technology & the Future</Button>
                </li>
                <li key={7}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faCampground}/>}>Society & Culture</Button>    
                </li> 
                <li key={8}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faBullseye}/>}>Career & Success</Button>    
                </li>
                <li key={9}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faShapes}/>}>Creativity</Button>  
               </li>
            </ul>
        </Grid>

        <Grid item md={3}>
            <Typography className={classes.category} variant='body1'>See popular titles</Typography>
            <ul className={classes.ul} >
            <li key={1}>
            <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faChartLine}/>}>Marketing & Sales</Button>
                </li>
                <li key={2}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faSignal}/>}>Personal Development</Button>
                </li>
                <li key={3}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faComments}/>}>Communication Skills</Button>
                </li>
                <li key={4}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faLightbulb}/>}>Motivation & Inspiration</Button>
                </li>
                <li key={5}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faHourglassHalf}/>}>Productivity</Button>
                </li>
                <li key={6}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faSpa}/>}>Mindfulness & Happiness</Button>
                </li>
                <li key={7}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faLeaf}/>}>Nature & the Environment</Button>    
                </li> 
                <li key={8}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faGraduationCap}/>}>Education</Button>    
                </li>
                <li key={9}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FontAwesomeIcon icon={faUsers}/>}>Philosophy</Button>  
               </li>
            </ul>
        </Grid>
    </Grid>
    </ThemeProvider>
    </Container>
    
    </div>
    
    
}
        </>
    );
}

export default Dropdown;