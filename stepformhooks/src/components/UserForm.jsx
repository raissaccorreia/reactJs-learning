import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

function UserForm() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    })
    

    const nextStep = () => {setStep(oldStep => oldStep + 1)}
    const prevStep = () => {setStep(oldStep => oldStep - 1)}

    const handleChange = (input, value) => {setData(oldData => ({...oldData, [input]: value}))};

    switch (step) {
        case 1:
            return (
            <FormUserDetails
                nextStep={nextStep}
                handleChange={handleChange}
                values={data}
            />
            );
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={data}
                />
            );
        case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={data}
                />
            );
        case 4:
            return <Success/>;
        default:
            return <h1>DEFAULT</h1>
        }
    }
        

export default UserForm
