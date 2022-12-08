import React, { useState } from 'react';
import "./css/styles.css";

function App() {
  const [num, setNum] = useState('');
  const [oldnum, setOldNum] = useState('');
  const [operator, setOperator] = useState();
  const [screen, setScreen] = useState('');
  const expression = [];

  function inputNum(e) {
    let input = e.target.value;
    setScreen(screen + input);

    if (expression[1].includes('*', '-', '*', '/')) {
      setNum(num + input)
    } else {
      setNum(oldnum + input)
    }
    

    // if (num === 0) {
    //   setNum(input);
    // } else {
    //   setNum(num + input);
    // }
  };

  function clear() {
    setNum(0);
  };

  function porcentage() {
    setNum(num / 100);
  };

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setScreen(screen + operatorInput);
    // setNum(0);

  };

  function calculate() {
    expression[0] = oldnum;
    expression[1] = operator;
    expression[2] = num;
    console.log(expression)
    setScreen(eval(expression.join()))

    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  };

  return (
    <div className="calculator-container">
      <div className="result">{screen === '' ? '0' : screen}</div>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={ clear } >
                C
              </button>
            </td>
            <td>
              <button onClick={ porcentage } >
                %
              </button>
            </td>
            <td>
              <button onClick={ operatorHandler } value="/" >
                /
              </button>
            </td>
            <td>
              <button onClick={ operatorHandler }  value="*" >
                *
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={ inputNum } value={7} >
                7
              </button>
            </td>
            <td>
              <button onClick={ inputNum } value={8} >
                8
              </button>
            </td>
            <td>
              <button onClick={ inputNum } value={9} >
                9
              </button>
            </td>
            <td>
              <button onClick={ operatorHandler }  value="-" >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={ inputNum } value={4} >
                4
              </button>
            </td>
            <td>
              <button onClick={ inputNum } value={5} >
                5
              </button>
            </td>
            <td>
              <button onClick={ inputNum } value={6} >
                6
              </button>
            </td>
            <td>
              <button onClick={ operatorHandler }  value="+" >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={ inputNum } value={1} >
                1
              </button>
            </td>
            <td>
              <button onClick={ inputNum } value={2} >
                2
              </button>
            </td>
            <td>
              <button onClick={ inputNum } value={3} >
                3
              </button>
            </td>
            <td rowSpan="2">
              <button
                className="equal"
                onClick={ calculate } >
                =
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                className="zero"
                onClick={ inputNum }
                value={0} >
                0
              </button>
            </td>
            <td>
              <button onClick={ inputNum } value="." >
                .
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
