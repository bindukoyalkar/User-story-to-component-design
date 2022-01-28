import { Button } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface Props{

}
function MyButton(props:Props) {
    return (
        <>
        <Button style={{marginRight:'2%',fontWeight:'400', marginTop:'6%'}} startIcon={<ShoppingCartIcon/>} variant="outlined">Buy Book</Button>
        </>
    );
}

export default MyButton;