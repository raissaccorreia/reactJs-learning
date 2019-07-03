import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {        
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter User Details"/>                    
                    <TextField
                        hintText="Enter your first name"
                        floatingLabelText="First Name" 
                        onChange={handleChange('First Name')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="Enter your last name"
                        floatingLabelText="Last Name" 
                        onChange={handleChange('Last Name')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Email"
                        floatingLabelText="Email" 
                        onChange={handleChange('Email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton
                        label= "Continue"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}                    
                    /> 
                    <RaisedButton
                        label= "Back"
                        primary={false}
                        styles={styles.button}
                        onClick={this.back}                    
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

export default FormPersonalDetails
