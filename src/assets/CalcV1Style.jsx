import styled from "styled-components";

const CalcV1Style = styled.div `
    width: 90%;
    max-width: 380px;
    background-color: #C2C2C2;
    box-shadow: 1px 1px 15px rgba(0,0,0,0.2);

    .visor {
        text-align: end;
        padding: 0 25px;
        font-size: 1.8rem;
        color: #4A3D6F;
    }

    .teclado {
        background-color: #5B4E89;
        padding-top: 30px;
        border-radius: 80px 0px 0px 0px;
    }

    button {
        width: 80px;
        padding: 30px;
        background-color: transparent;
        border: 1px solid transparent;
        color: white;
        font-size: 1.5rem;

        &:hover {
            border: 1px solid white;
            border-radius: 8px 20px;
        }
    }
    .igual {
        float: right;
        margin: -90px 15px 0 0;
        background-color: #4A3D6F;
        border-radius: 8px 20px;
        padding: 75px 0;
    }
    .fileira4 {
        margin-right: 85px;
    }
    @media screen and (min-width: 600px) {
        width: 250px;
        button {
            width: 55px;
            padding: 20px;
        }
        .igual {
            float: right;
            margin: -65px 5px 0 0;
            padding: 45px 0;
        }
        .teclado {
            border-radius:60px 0px 0px 0px;
        }
        .fileira4 {
            margin-right: 55px;
        }
    }
`

export default CalcV1Style;