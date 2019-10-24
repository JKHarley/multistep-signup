import React from 'react';

import Input, { InputContain } from '../Input/Input';
import ButtonComp from '../Button/Button';
import { COLORS } from '../../GlobalVars';
import Error from './Error';

function StepOne({ nextStep, handleChange, details, handleRequired }) {
    const nextStage = () => {
        nextStep();
    };

    const { fullName, phoneNumber } = details;

    return (
        <React.Fragment>
            <InputContain>
                <Input
                    inputChange={handleRequired('fullName')}
                    type='text'
                    name='fullName'
                    id='full-name'
                    placeHolder='Full Name'
                    value={fullName}
                />
                {fullName.length < 1 ? (
                    <Error>This field is required</Error>
                ) : null}
            </InputContain>
            <InputContain>
                <Input
                    inputChange={handleChange('phoneNumber')}
                    type='tel'
                    name='phoneNumber'
                    id='phone-number'
                    placeHolder='Phone Number'
                    value={phoneNumber}
                    maxLength='20'
                />
                {phoneNumber.match(/[a-z]/i) ? (
                    <Error>Please enter a valid number</Error>
                ) : null}
            </InputContain>
            <ButtonComp
                onClick={nextStage}
                text='Next'
                title='Next'
                backgroundColor={COLORS.primary}
                color='#fff'
                type='submit'
                disabled={fullName.length < 1 || phoneNumber.match(/[a-z]/i)}
            />
        </React.Fragment>
    );
}

export default StepOne;
