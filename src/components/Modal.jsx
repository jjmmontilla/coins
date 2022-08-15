import PropTypes from "prop-types";
import {  
  Dialog, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
} from '@mui/material';
import { CoinsListForm } from './CoinsListForm';

export const Modal = ({open, handleClose, onSubmit}) => {

  return (
    <>
      <Dialog open={open} onClose={()=>handleClose(false)} maxWidth='xs' fullWidth={true} >
        <DialogTitle>Save List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter list name here.
          </DialogContentText>

          <CoinsListForm onSubmit={onSubmit} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

Modal.defaultProps = {
  open: false,
};

