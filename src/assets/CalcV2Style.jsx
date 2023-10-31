import styled from "styled-components";

const CalcV2Style = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 360px;
    font-size: 2rem;
    background-color: #C2C2C2;
    border-radius: 8px;
    box-shadow: 1px 1px 15px rgba(0,0,0,0.2);
    color: #4A3D6F;

    input {
        width: 75%;
        margin-top: 20px;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 8px;
        background-color: #615492;
        color: white;
    }

    .teclado {
        background-color: #4A3D6F;
        margin-top: 30px;
        border-radius: 0 0 8px 8px;
    }

    button {
        width: 60px;
        padding: 20px 10px;
        margin: 5px;
        background-color: transparent;
        border: 1px solid transparent;
        color: white;
        font-size: 1.5rem;

        &:hover {
            border: 1px solid white;
            border-radius: 8px;
        }
    }
    @media screen and (min-width: 600px) {
        width: 260px;
        button {
            width: 55px;
            padding: 20px;
        }
    }
`

export default CalcV2Style;