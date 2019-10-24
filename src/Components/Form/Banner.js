import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../GlobalVars';

const BannerComp = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary};
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    line-height: 2.7rem;
    color: #fff;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`;

function Banner({ title }) {
    return <BannerComp>{title}</BannerComp>;
}

export default Banner;

BannerComp.propTypes = {
    title: PropTypes.string
};
