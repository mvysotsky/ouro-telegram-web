import styled from "styled-components";


const StyledButton = styled.button<{ $width: number }>`
    display: inline-block; /* Allows setting width and height */
    padding: 15px 30px; /* Adjust padding for desired size */
    background-color: #000; /* Fallback background color */
    color: #0f0; /* Green text */
    text-decoration: none; /* Remove underline from link */
    border: none; /* Yellow border */
    border-radius: 5px; /* Rounded corners */
    font-family: sans-serif;
    font-weight: bold;
    cursor: pointer; /* Change cursor on hover */
    transition: all 0.3s ease-in-out;
    position: relative; /* Positioning context for pseudo-element */
    background-image: url('/public/button.svg'); /* Set SVG as background */
    background-size: cover; /* Ensure the background covers the button */
    background-repeat: no-repeat; /* Prevent background from repeating */
    background-position: center; /* Center the background image */
    width: ${props => props.$width}px;
    height: auto;
    aspect-ratio: 4/1; /* Set aspect ratio */
`;

type Props = {
    text: string;
    width?: number;
}

const MainButton = ({text, width = 288}: Props) => {
    return <StyledButton $width={width}>{text}</StyledButton>;
}

export default MainButton;