import PropTypes from "prop-types";
import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import CoinsListSchema from './CoinsListSchema';

export const CoinsListForm = ({handleClose, onSubmit}) => {
  return (
    <>
      <Formik initialValues={{ name: '' }}
        validationSchema={CoinsListSchema}
        onSubmit={(values, {setSubmitting}) => {
          onSubmit(values);
          setSubmitting(false);
        }}
        >
          {({ isValid, dirty, errors, values, handleChange, isSubmitting }) => (
            <Form>
              <TextField
                required
                error={errors.name ? true : false }
                autoFocus
                margin="dense"
                name="name"
                label="List Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={values.name}
                helperText={errors.name}
              />

              <div className='d-flex'>
                <Button onClick={() => { handleClose(false)}}>Cancel</Button>
                <Button variant="contained"
                  type='submit' 
                  disabled={!dirty || !isValid || isSubmitting} >
                  Save
                </Button>
              </div>
            </Form>
          )}
      </Formik>  
    </>
  )
}

CoinsListForm.propTypes = {
  onSubmit: PropTypes.func, 
  handleClose: PropTypes.func, 
};


