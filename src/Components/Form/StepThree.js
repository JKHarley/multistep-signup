import React from 'react';
import ButtonComp from '../Button/Button';
import { COLORS } from '../../GlobalVars';
import styled from 'styled-components';

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
        font-family: 'Roboto';
        font-size: 1.8rem;
        margin-bottom: 2rem;
        
        @media (max-width: 640px) {
            font-size: 1.6rem;
        }
    }

    ul {
        margin: 0 0 2rem 0;
        padding: 1rem 0;
        border-radius: 1rem;
        list-style: none;
        background: #fff;

        li {
            font-family: 'Nunito', sans-serif;
            font-size: 1.4rem;

            &:not(:last-of-type) {
                margin-bottom: 1rem;
            }
        }
    }
`;

function StepThree({ prevStep, nextStep, details, dob }) {
    const prevStage = () => {
        prevStep();
    };

    const nextStage = () => {
        nextStep();
    };

    const { fullName, phoneNumber, emailAddress } = details;
    const { day, month, year } = dob;

    return (
        <React.Fragment>
            <Details>
                <p>Please make sure the below details are correct:</p>
                <ul>
                    <li>Full Name: {fullName}</li>
                    <li>Phone Number: {phoneNumber}</li>
                    <li>Email Address: {emailAddress}</li>
                    <li>Date Of Birth: {`${day}/${month}/${year}`}</li>
                </ul>
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
                        text='Submit'
                        title='Submit'
                        backgroundColor={COLORS.primary}
                        color='#fff'
                    />
                </div>
            </Details>
        </React.Fragment>
    );
}

export default StepThree;
