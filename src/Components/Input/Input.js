import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const InputContain = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 1rem;
`;

const InputComp = styled.input`
    width: 100%;
    min-width: 0;
    height: 4rem;
    position: relative;
    margin-bottom: 2rem;
    border: 0;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    padding-left: 1rem;
`;

function Input({ type, name, id, placeHolder, inputChange, value, maxLength }) {
    return (
        <React.Fragment>
            <InputComp
                onChange={inputChange}
                type={type}
                name={name}
                id={id}
                placeholder={placeHolder}
                defaultValue={value}
                maxLength={maxLength}
            />
        </React.Fragment>
    );
}

export default Input;

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    text: PropTypes.string,
    maxLength: PropTypes.string
};

Input.defaultProps = {
    onChange: () => {},
    name: '',
    id: '',
    placeholder: '',
    defaultValue: '',
    text: '',
    maxLength: '64'
};
