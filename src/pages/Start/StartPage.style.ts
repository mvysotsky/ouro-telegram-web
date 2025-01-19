import styled from "styled-components";
import TextLogo from "../../components/TextLogo.tsx";

export const StyledTextLogo = styled(TextLogo)``;

export const StyledStartPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/public/coin_logo.webp'), url('/public/background.webp');
    background-size: 60%, 500%;
    background-position: center 30%, center -55px;
    background-repeat: no-repeat, no-repeat;
    background-color: black;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
    ${StyledTextLogo} {
        margin-top: 10vh;
        margin-bottom: 40vh;
    }
    
    p {
        padding: 0 20px;
        font-size: 1.5rem;
    }
`;