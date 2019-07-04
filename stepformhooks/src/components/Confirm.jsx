import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

function Confirm({nextStep, prevStep, values:{ firstName, lastName, email, occupation, city, bio }}) {       
    return (
        <MuiThemeProvider>          
            <AppBar title="Confirm User Data" />
            <List>
                <ListItem primaryText="First Name" secondaryText={firstName} />
                <ListItem primaryText="Last Name" secondaryText={lastName} />
                <ListItem primaryText="Email" secondaryText={email} />
                <ListItem primaryText="Occupation" secondaryText={occupation} />
                <ListItem primaryText="City" secondaryText={city} />
                <ListItem primaryText="Bio" secondaryText={bio} />
            </List>
            <br />
            <RaisedButton
                label="Confirm and Continue"
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

export default Confirm
