import React, { useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

function FormPersonalDetails({nextStep, prevStep, handleChange, values}) {
    
    return (           
      <MuiThemeProvider>       
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={e => handleChange('occupation', e.target.value)}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={e => handleChange('city', e.target.value)}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={e => handleChange('bio', e.target.value)}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={nextStep}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={prevStep}
          />        
      </MuiThemeProvider>
    );
  }

const styles = {
  button: {
    margin: 15
  }
};

export default FormPersonalDetails
