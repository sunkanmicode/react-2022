import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@material-ui/core";

const DialogTest = () => {
    const [open, setOpen] = useState(false)

     const handleClickOpen = () => {
       setOpen(true);
     };

     const handleClose = () => {
       setOpen(false);
     };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog open={open}>
        <DialogContent>
          <h2>Am Open to Changes</h2>
          <DialogContentText>No Wahala</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            X
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogTest
