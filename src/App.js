import React, { useState } from 'react';
import * as math from "mathjs";
import "./css/styles.css";

function App() {
  const [num, setNum] = useState(0);

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }



  return (
    <div className="calculator-container">
      <div className="result">{num}</div>
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
              <button onClick={inputNum} value={7}>
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
