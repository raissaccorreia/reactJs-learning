import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter Personal Details"/>                    
                    <TextField
                        hintText="Enter your occupation"
                        floatingLabelText="Occupation" 
                        onChange={handleChange('Occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        hintText="Enter your city"
                        floatingLabelText="City" 
                        onChange={handleChange('City')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Bio"
                        floatingLabelText="Bio" 
                        onChange={handleChange('Bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton
                        label= "continue"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}                    
                    />                                     
                </>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button: {
        margin: 15
    }
}

export default FormUserDetails
