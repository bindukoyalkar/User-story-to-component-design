import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 300,
  bgcolor: 'background.paper',
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>success modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckCircleOutlineIcon style={{color:'green',marginLeft:'45%',fontSize:'50'}}/>
          <Typography id="modal-modal-title" variant="subtitle2" component="h2">
           The Book was successfully sent to your Kindle
          </Typography>

          <Typography variant='body2'>
          Next time you sync your Kindle the blinks will be waiting for you.Please be patient - they can be slow travelers!
          </Typography>
          <br></br>
          <Button style={{width:"100%"}} variant='contained'>Continue reading</Button>
         
        </Box>
      </Modal>
    </div>
  );
}
