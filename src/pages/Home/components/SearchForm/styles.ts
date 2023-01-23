import styled from "styled-components";

export const SearchContainer = styled.section `
    width: 100%;
    max-width: 864px;

    margin-top: 4.5rem;
`

export const InfosContainer = styled.div `
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    .title {
        color: ${props => props.theme['base-subtitle']};	
        font-size: 1.15rem;
        font-weight: bold;
    }

    .quantity {
        color: ${props => props.theme['base-span']};	
        font-size: 0.875rem;
    }
`

export const FormContainer = styled.form `
    width: 100%;

    input {
        width: 100%;
        background: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 8px;

        padding: 0.75rem 1rem;
        
        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
    }
`
