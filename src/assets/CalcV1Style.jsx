import styled from "styled-components";

const CalcV1Style = styled.div `
    width: 90%;
    max-width: 360px;
    background-color: #C2C2C2;

    .visor {
        text-align: end;
        padding: 0 25px;
        font-size: 1.8rem;
        color: #4A3D6F;
    }

    .teclado {
        background-color: #5B4E89;
        padding-top: 30px;
        border-radius: 90px 0px 0px 0px;
    }

    button {
        width: 80px;
        padding: 30px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1.5rem;
    }
    .igual {
        background-color: #4A3D6F;
    }
`

export default CalcV1Style;