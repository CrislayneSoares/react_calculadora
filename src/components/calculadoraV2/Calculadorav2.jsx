import { useState } from "react"
import CalcV2Style from "../../assets/CalcV2Style"

export default function CalculadoraV2 () {
    const [valor1, setVolor1] = useState()
    const [valor2, setValor2] = useState()
    const [resultado, setResultado] = useState(0)

    const pegarV1 = (e) => {
        setVolor1(Number(e.target.value))
    }
    const pegarV2 = (e) => {
        setValor2(Number(e.target.value))
    }
    const soma = () => {
        setResultado(valor1 + valor2)
    }
    const sub = () => {
        setResultado(valor1 - valor2)
    }
    const mult = () => {
        setResultado(valor1 * valor2)
    }
    const divi = () => {
        setResultado(valor1 / valor2)
    }
    const limpar = () => {
        setResultado(0)
        setVolor1(0)
        setValor2(0)
    }
    
    return (
        <CalcV2Style>
            <p>{resultado}</p>
            <input type="number" onChange={pegarV1} />
            <input type="number" onChange={pegarV2} />
            <div className="teclado">
                <button onClick={soma} value={"+"}>+</button>
                <button onClick={sub} value={"-"}>-</button>
                <button onClick={divi} value={"/"}>/</button>
                <button onClick={mult} value={"*"}>x</button>
                <button onClick={limpar} value={"c"}>C</button>
            </div>
        </CalcV2Style>
    )
}