import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 160%;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['base-border']};
    }
    body {
        background: ${props => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;  
        color: ${props => props.theme['base-text']};
    }
    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }
`
