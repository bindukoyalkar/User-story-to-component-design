import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField , InputAdornment} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
interface Props{
}

const innerTheme = createTheme({
  palette: {
    primary: {
      main: '#116BE9',
    }
  },
});  

const SearchBar=(props:Props)=> {
    return (
        <>
        <ThemeProvider theme={innerTheme}>
          <TextField style={{width:'750px',marginLeft:'20%', marginTop:'2%'}} label="Search by title or author" variant="standard"  InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
              ),
            }}/>
        </ThemeProvider>
</> );
}

export default SearchBar;

