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

function App() {
  return (
    <div>
      <Dropdown />
      <Heading/>
      <Container style={{paddingLeft:"7%",paddingRight:"7%"}}>
      <Grid container rowSpacing={2} >
        <Grid item xs={12} sm={6} md={4}>
        <MyCard/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <MyCard/>
        </Grid> 

        <Grid item xs={12} sm={6} md={4}>
        <MyCard/>
        </Grid>
      </Grid>
      </Container>
      <br></br><br></br><br></br>
      <Banner/>
      <SearchBar/>
      <BookDetail />
      <BasicModal/>
      <Modal2 />
     </div>
  );
}

export default App;
