import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid, MenuItem, Select, TextField } from '@mui/material';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>to kindle modal</Button>
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
          <Button style={{width:"100%"}} variant='contained'>Add email</Button>
          <Button style={{width:"100%"}} variant='text'>Need help?</Button>
        </Box>
      </Modal>
    </div>
  );
}
