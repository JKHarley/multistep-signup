import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Banner from './Banner';

const FormCard = styled.section`
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ecf0f1;
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.16),
        0 0.2rem 1rem 0 rgba(0, 0, 0, 0.12);
    border-radius: 1rem;
    padding-bottom: 2rem;

    @media (max-width: 640px) {
        width: 90vw;
    }
`;

const FormComp = styled.form`
    width: 90%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const initialState = { step: 1 };

function reducer(state, action) {
    switch (action.type) {
        case 'nextStep':
            return { step: state.step + 1 };
        case 'prevStep':
            return { step: state.step - 1 };
        default:
            throw new Error();
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { step } = state;

    const [details, setDetails] = useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        age: ''
    });

    const [dob, setDob] = useState({
        day: '',
        month: '',
        year: ''
    });

    const formStep = () => {
        switch (state.step) {
            case 1:
                return (
                    <StepOne
                        nextStep={nextStep}
                        handleChange={handleChange}
                        details={details}
                        handleRequired={handleRequired}
                    />
                );
            case 2:
                return (
                    <StepTwo
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        details={details}
                        handleDOB={handleDOB}
                        dob={dob}
                    />
                );
            case 3:
                return (
                    <StepThree
                        prevStep={prevStep}
                        nextStep={nextStep}
                        details={details}
                        dob={dob}
                    />
                );
            case 4:
                return <StepFour />;
            default:
                return null;
        }
    };

    const prevStep = () => {
        dispatch({ type: 'prevStep' });
    };

    const nextStep = () => {
        dispatch({ type: 'nextStep' });
    };

    const handleChange = inputChange => e => {
        setDetails({ ...details, [inputChange]: e.target.value });
    };

    const handleRequired = inputChange => e => {
        e.target.value.length >= 1
            ? setDetails({ ...details, [inputChange]: e.target.value })
            : setDetails({ ...details, [inputChange]: '' });
    };

    const handleDOB = inputChange => e => {
        let birth = { ...dob, [inputChange]: e.target.value };
        let birthDate = new Date(birth.year, birth.month, birth.day);
        let currentDate = new Date();
        let difference = currentDate - birthDate;
        let age = Math.floor(difference / 31557600000);

        setDob({
            ...dob,
            day: birth.day.replace(/[^0-9]/g, ''),
            month: birth.month.replace(/[^0-9]/g, ''),
            year: birth.year.replace(/[^0-9]/g, '')
        });
        setDetails({ ...details, age: age });
    };

    return (
        <FormCard>
            <Banner
                title={
                    step === 3
                        ? 'Confirmation'
                        : step === 4
                        ? 'Success!'
                        : 'Enter Details'
                }
            />
            <FormComp onSubmit={e => e.preventDefault}>
                {formStep(state.step)}
            </FormComp>
        </FormCard>
    );
};

export default Form;
