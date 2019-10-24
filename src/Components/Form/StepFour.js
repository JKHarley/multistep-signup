import React from 'react';
import styled from 'styled-components';

import tick from '../../Images/tick.svg';

const Confirmation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-family: 'Nunito', sans-serif;
        font-size: 2.5rem;
        line-height: 3rem;

        @media (max-width: 640px) {
            font-size: 2rem;
            line-height: 2.5rem;
        }
    }

    picture {
        source,
        img {
            width: 7rem;
            height: 7rem;
        }
    }
`;

function StepFour() {
    return (
        <React.Fragment>
            <Confirmation>
                <picture>
                    <source srcSet={tick} />
                    <img src={tick} alt='tick' />
                </picture>
                <p>Thank you for signing up!</p>
            </Confirmation>
        </React.Fragment>
    );
}

export default StepFour;
