import React, { useState } from 'react';
import "./css/styles.css";

const arrOperacoes = ['*', '/', '+', '.', '-'];

function App() {
  const [input, setInput] = useState("");

  function insereNum(val) {
    setInput(input + val);
  };

  function insereOperacao(val) {
    if (input === "" |
        (arrOperacoes.includes(input[input.length - 1]) && arrOperacoes.includes(val)))
    { return;
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="calculator-container">
      <div className="result"></div>
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={(e) => console.log(e.target.value)}
                value="clear" >
                C
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value="%">
                %
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value="/">
                /
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value="*">
                *
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={7}>
                7
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={8}>
                8
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={9}>
                9
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value="-">
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={4}>
                4
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={5}>
                5
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={6}>
                6
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value="+">
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={1}>
                1
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={2}>
                2
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value={3}>
                3
              </button>
            </td>
            <td rowSpan="2">
              <button
                className="equal"
                onClick={(e) => console.log(e.target.value)}
                value="=" >
                =
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                className="zero"
                onClick={(e) => console.log(e.target.value)}
                value={0} >
                0
              </button>
            </td>
            <td>
              <button onClick={(e) => console.log(e.target.value)} value=".">
                .
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
