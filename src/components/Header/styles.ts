import styled from "styled-components";
import backgroundImg from '../../assets/cover.png'


export const HeaderContainer = styled.header `
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
    height: 18.5rem;
    min-height: 18.5rem;

    display: flex;
    justify-content: center;

    img {
        width: 9rem;
        margin-top: -5rem;
    }
`