import styled from "styled-components";

export const BannerContainer = styled.section`
    width: 100%;
    max-width: 864px;

    background: ${props => props.theme['base-profile']};	
    padding: 2rem;

    display: flex;
    gap: 2rem;

    margin-top: -9.5rem;

    border-radius: 8px;

    img {
        max-width: 148px;
        max-height: 148px;
    }

    @media (max-width: 800px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const InfosContainer = styled.div`
    .description {
        color: ${props => props.theme['base-text']};
    }

    @media (max-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        color: ${props => props.theme['base-title']};
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    a {
        color: ${props => props.theme.blue};
        text-decoration: none;
        font-size: 0.75rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: 800px) {
        width: 100%;
        display: flex;        
    }
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;


    margin-top: 1.5rem;

    svg {
        color: ${props => props.theme['base-label']};
    }

    @media (max-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: column;

        gap: .5rem;
    }
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme['base-subtitle']};
`