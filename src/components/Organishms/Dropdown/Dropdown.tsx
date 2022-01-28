import React, { useState } from 'react';
import {Typography,Grid, AppBar,CssBaseline ,Toolbar, Container, TextField, InputAdornment, createTheme, ThemeProvider } from '@mui/material'
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
import Image from '../../Atoms/Image/Image';
import MyButton from '../../Molecules/MyButton/MyButton';
import Icons from '../../Atoms/Icons/Icons';

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
      top:'25%'
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
                    <Image alt="logo" className={classes.logo} path={logo} />
                </Grid>

                <Grid item md={0.5} >
                <Icons> <SearchOutlinedIcon onClick={(e) => {expandSearch(e,1)}} className={classes.search}/></Icons>
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
                { value===0 && <Icons><KeyboardArrowDownIcon  className={classes.arrowUp}/></Icons>}
             { value===1 && <Icons><KeyboardArrowUpOutlinedIcon  className={classes.arrowUp}/></Icons>}
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
                    <User username='B'/>
                </Grid>

                <Grid item md={0.5}>
                  <Icons>  <KeyboardArrowDownIcon className={classes.arrowUp}/></Icons>
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
               <MyButton variant='text' info="Entrepreneurship"><FontAwesomeIcon icon={faRocket}/></MyButton>
                </li> 

                <li key={2}>
                <MyButton variant='text' info="Science"><FontAwesomeIcon icon={faFlask}/></MyButton>
                </li>

                <li key={3}>
                <MyButton variant='text' info="Economics"><FontAwesomeIcon icon={faGlobeAsia}/></MyButton>
               </li>

                <li key={4}>
                <MyButton variant='text' info="Corporate Culture"><FontAwesomeIcon icon={faBriefcase}/></MyButton>
                </li>

                <li key={5}>
                <MyButton variant='text' info="Money & Investments"><FontAwesomeIcon icon={faPiggyBank}/></MyButton>
               </li> 

                <li key={6}>
                <MyButton variant='text' info="Sex & Relationships"><FontAwesomeIcon icon={faHeart}/></MyButton>
                </li>

                <li key={7}>
                <MyButton variant='text' info="Parenting"><FontAwesomeIcon icon={faBaby}/></MyButton>
                </li> 

                <li key={8}>
                <MyButton variant='text' info="Biography & Memoir"><FontAwesomeIcon icon={faPenFancy}/></MyButton>
                </li>

                <li key={9}>
                <MyButton variant='text' info="Religion & Spirituality"><FontAwesomeIcon icon={faPrayingHands}/></MyButton>
               </li>
            </ul>
        </Grid>

        <Grid item md={3}>
            <Typography className={classes.category} variant='body1'>See recently added titles</Typography>
            <ul className={classes.ul}>
                <li key={1}>
                <MyButton variant='text' info="Politics"><FontAwesomeIcon icon={faLandmark}/></MyButton>
               </li>

                <li key={2}>
                <MyButton variant='text' info="Health & Nutrition"><FontAwesomeIcon icon={faAppleAlt}/></MyButton>
                </li>

                <li key={3}>
                <MyButton variant='text' info="History"><FontAwesomeIcon icon={faMonument}/></MyButton>
                </li>

                <li key={4}>
                <MyButton variant='text' info="Management & Leadership"><FontAwesomeIcon icon={faVectorSquare}/></MyButton>
               </li>

                <li key={5}>
                <MyButton variant='text' info="Psychology"><FontAwesomeIcon icon={faHeadSideVirus}/></MyButton>
               </li>

                <li key={6}>
                <MyButton variant='text' info="Technology & the Future"><FontAwesomeIcon icon={faCoins}/></MyButton>
                </li>

                <li key={7}>
                <MyButton variant='text' info="Society & Culture"><FontAwesomeIcon icon={faCampground}/></MyButton>
                </li> 

                <li key={8}>
                <MyButton variant='text' info="Career & Success"><FontAwesomeIcon icon={faBullseye}/></MyButton>
                </li>

                <li key={9}>
                <MyButton variant='text' info="Creativity"><FontAwesomeIcon icon={faShapes}/></MyButton>
               </li>
            </ul>
        </Grid>

        <Grid item md={3}>
            <Typography className={classes.category} variant='body1'>See popular titles</Typography>
            <ul className={classes.ul} >
              <li key={1}>
              <MyButton variant='text' info="Marketing & Sales"><FontAwesomeIcon icon={faChartLine}/></MyButton>
              </li>

              <li key={2}>
              <MyButton variant='text' info="Personal Development"><FontAwesomeIcon icon={faSignal}/></MyButton>
              </li>

              <li key={3}>
              <MyButton variant='text' info="Communication Skills"><FontAwesomeIcon icon={faComments}/></MyButton>
              </li>

              <li key={4}>
              <MyButton variant='text' info="Motivation & Inspiration"><FontAwesomeIcon icon={faLightbulb}/></MyButton>
              </li>

              <li key={5}>
              <MyButton variant='text' info="Productivity"><FontAwesomeIcon icon={faHourglassHalf}/></MyButton>
              </li>

              <li key={6}>
              <MyButton variant='text' info="Mindfulness & Happiness"><FontAwesomeIcon icon={faSpa}/></MyButton>
              </li>

              <li key={7}>
              <MyButton variant='text' info="Nature & the Environment"><FontAwesomeIcon icon={faLeaf}/></MyButton>
             </li> 

              <li key={8}>
              <MyButton variant='text' info="Education"><FontAwesomeIcon icon={faGraduationCap}/></MyButton>
              </li>

              <li key={9}>
              <MyButton variant='text' info="Philosophy"><FontAwesomeIcon icon={faUsers}/></MyButton>
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