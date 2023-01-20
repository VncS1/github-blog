import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
  
    z-index: -1;

    > img {
        width: 100%;
        height: 296px;
    }
    
    img.logo {
        position: absolute;
        left: 50%;
        top: -25px;
        transform: translateX(-50%);
        width: 148px;
    }
`