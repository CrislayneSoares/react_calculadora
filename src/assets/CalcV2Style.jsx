import styled from "styled-components";

const CalcV2Style = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 360px;
    font-size: 2rem;

    input {
        width: 100%;
        margin-top: 20px;
        padding: 10px;
    }

    button {
        width: 60px;
        padding: 20px 10px;
        margin: 5px;
        background-color: #4A3D6F;
        border: none;
        color: white;
        font-size: 1.5rem;
    }
`

export default CalcV2Style;