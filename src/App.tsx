import { Container, Grid } from '@mui/material';
import React from 'react';
import Banner from './components/Molecules/Banner/Banner';
import Heading from './components/Molecules/Heading/Heading';
import MyCard from './components/Molecules/MyCard/MyCard';
import SearchBar from './components/Molecules/SearchBar/SearchBar';
import BasicModal from './components/Organishms/BasicModal/BasicModal';
import BookDetail from './components/Organishms/BookDetail/BookDetail';
import Dropdown from './components/Organishms/Dropdown/Dropdown';
import Modal2 from './components/Organishms/Modal2';
import one from './components/Atoms/Image/1.png';
import two from './components/Atoms/Image/2.png';
import three from './components/Atoms/Image/3.png';
import four from './components/Atoms/Image/4.png';
function App() {
  return (
    <div>
      <Dropdown />
      <Heading/>
      <Container style={{paddingLeft:"7%",paddingRight:"7%"}}>
      <Grid container rowSpacing={2} >
      
        <Grid item xs={12} sm={6} md={4}>
        <MyCard src={two} alt='book two' name='Choose Possibility' author='Sukhinder Singh Cassidy' duration='16-minute read' />
        </Grid> 

        <Grid item xs={12} sm={6} md={4}>
        <MyCard src={three} alt='book three' name='The Cult of We' author='Eliot Brown and Maureen Farrell' duration='12-minute read' />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <MyCard src={four} alt='book four' name='The Extended Mind' author='Annie Murphy Paul' duration='15-minute read' />
        </Grid>
      </Grid>
      </Container>
      <br></br><br></br><br></br>
      <Banner/>
      <SearchBar/>
      <BookDetail src={one} alt='the grid' name='The Grid' author='Matt Watkinson' description='The Decision-Making Tool for Every Business (Including Yours)' duration='15-mins' />
      <BasicModal/>
      <Modal2 />
     </div>
  );
}

export default App;
