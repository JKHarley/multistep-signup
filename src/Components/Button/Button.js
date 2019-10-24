import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import { COLORS } from '../../GlobalVars';

const ButtonComp = styled.button`
    display: inline-block;
    padding: 1rem 3rem;
    font-size: 2rem;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border: 0;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.2);
    transition: all 0.3s;

    @media (max-width: 640px) {
        font-size: 1.5rem;
    }

    &:disabled {
        background: ${props =>
            props.backgroundColor && lighten(0.2, props.backgroundColor)};
    }

    &:hover {
        transform: translateY(-0.2rem);
        box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.1);
    }
`;

function Button({ onClick, color, backgroundColor, title, text, disabled }) {
    return (
        <ButtonComp
            onClick={onClick}
            color={color}
            backgroundColor={backgroundColor}
            title={title}
            disabled={disabled}
        >
            {text}
        </ButtonComp>
    );
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    color: '#fff',
    backgroundColor: COLORS.primary,
    disabled: false
};
