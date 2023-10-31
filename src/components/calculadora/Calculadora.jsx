import { useState } from "react";
import CalcV1Style from "../../assets/CalcV1Style";

export default function Calculadora() {
    const [pNum, setPnum] = useState(0)
    const [sNum, setSnum] = useState(0)
    const [op, setOp] = useState("")
    const [resultado, setResultado] = useState(0)

    const pegarNum = (e) => { 
        if (pNum === 0 || resultado === 0) {
            setPnum(e.target.value)
            setResultado(e.target.value) 
        } else {
            setPnum(pNum + e.target.value)
            setResultado(pNum + e.target.value)
        }
    }

    const operator = (e) => {
        setOp(e.target.value)
        setSnum(pNum)
        setPnum(0)
        setResultado(e.target.value)
    }

    const limpar = () => {
        setResultado(0)
    }

    const apagar = () => {
        setResultado(resultado.slice(0, -1))
    }

    const porcentagem = () => {
        setPnum(pNum / 100)
        setResultado(pNum / 100)
    }

    const calcular = () => {
        setResultado(op === "/" ? sNum / pNum : 
                     op === "-" ? sNum - pNum :
                     op === "+" ? +sNum + +pNum : 
                     op === "x" ? sNum * pNum : "Error")
        setPnum(0)
        setSnum(0)
    }

    return(
    <CalcV1Style>
      <div>
        <div className="visor">
          {/* <p>{pNum}</p>
          <p>{op}</p>
          <p>{sNum}</p> */}
          <p>{resultado}</p>
        </div>
        <div className="teclado">
            <div>
                <button style={{color:"#A65332"}} onClick={limpar}>C</button>
                <button onClick={apagar}>¬</button>
                <button onClick={operator} value={"/"}>/</button>
                <button onClick={operator} value={"x"}>x</button> 

            </div>
            <div>
                <button onClick={pegarNum} value={7}>7</button>
                <button onClick={pegarNum} value={8}>8</button>
                <button onClick={pegarNum} value={9}>9</button>
                <button onClick={operator} value={"+"}>+</button>

            </div>
            <div>
                <button onClick={pegarNum} value={4}>4</button>
                <button onClick={pegarNum} value={5}>5</button>
                <button onClick={pegarNum} value={6}> 6</button>
                <button onClick={operator} value={"-"}>-</button>

            </div>
            <div className="fileira4">
                <button onClick={pegarNum} value={1}>1</button>
                <button onClick={pegarNum} value={2}>2</button>
                <button onClick={pegarNum} value={3}>3</button>

            </div>
            <button onClick={calcular} className="igual">=</button>
            <div>
                <button onClick={pegarNum} value={0}>0</button>
                <button onClick={porcentagem}>%</button>
                <button onClick={pegarNum} value={"."}>.</button>

            </div>
            
          
        </div>
      </div>
    </CalcV1Style>
    )
}