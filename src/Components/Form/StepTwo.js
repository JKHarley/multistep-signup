import React from 'react';
import Input, { InputContain } from '../Input/Input';
import ButtonComp from '../Button/Button';
import { COLORS } from '../../GlobalVars';
import Error from './Error';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const DobContain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 2rem;

    @media (max-width: 640px) {
        flex-wrap: wrap;
    }

    input:not(:last-of-type) {
        margin-right: 1rem;

        @media (max-width: 640px) {
            margin-right: 0;
        }
    }
`;

function StepTwo({
    prevStep,
    nextStep,
    handleChange,
    handleDOB,
    dob,
    details
}) {
    const prevStage = () => {
        prevStep();
    };

    const nextStage = () => {
        nextStep();
    };

    const { emailAddress, age } = details;
    const { day, month, year } = dob;

    return (
        <React.Fragment>
            <InputContain>
                <Input
                    inputChange={handleChange('emailAddress')}
                    type='email'
                    name='email'
                    id='email'
                    placeHolder='Email address'
                    value={emailAddress}
                />
                {emailAddress.includes('@') ? null : (
                    <Error>Please enter a valid email address</Error>
                )}
            </InputContain>

            <DobContain>
                <Input
                    inputChange={handleDOB('day')}
                    type='text'
                    name='day'
                    id='day'
                    placeHolder='Day'
                    value={day}
                    maxLength='2'
                />
                <Input
                    inputChange={handleDOB('month')}
                    type='text'
                    name='month'
                    id='month'
                    placeHolder='Month'
                    value={month}
                    maxLength='2'
                />
                <Input
                    inputChange={handleDOB('year')}
                    type='text'
                    name='year'
                    id='year'
                    placeHolder='Year'
                    value={year}
                    maxLength='4'
                />
                {age < 18 ? <Error>User must be at least 18</Error> : null}
                {day > 31 || month > 12 || year < 1930 ? (
                    <Error>Please enter a valid date</Error>
                ) : null}
            </DobContain>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <ButtonComp
                    onClick={prevStage}
                    text='Back'
                    title='Back'
                    backgroundColor={COLORS.primary}
                    color='#fff'
                />
                <ButtonComp
                    onClick={nextStage}
                    text='Next'
                    title='Next'
                    backgroundColor={COLORS.primary}
                    color='#fff'
                    disabled={
                        age < 18 ||
                        day.length < 1 ||
                        day > 31 ||
                        month.length < 1 ||
                        month > 12 ||
                        year.length < 4 ||
                        year < 1930 ||
                        !emailAddress.includes('@')
                    }
                />
            </div>
        </React.Fragment>
    );
}

export default StepTwo;

ButtonComp.propTypes = {
    text: PropTypes.string.isRequired
};
