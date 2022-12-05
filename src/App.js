import "./css/styles.css" 

function App() {
  return (
    <div className="calculator-container">
      <div
        className="result">
      </div>
      <table>
        <tbody>
        <tr>
          <td>
            <button>C</button>
          </td>
          <td>
            <button>%</button>
          </td>
          <td>
            <button>/</button>
          </td>
          <td>
            <button>*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>7</button>
          </td>
          <td>
            <button>8</button>
          </td>
          <td>
            <button>9</button>
          </td>
          <td>
            <button>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>4</button>
          </td>
          <td>
            <button>5</button>
          </td>
          <td>
            <button>6</button>
          </td>
          <td>
            <button>+</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={(e) => console.log(e.target.value)} value={1}>1</button>
          </td>
          <td>
            <button>2</button>
          </td>
          <td>
            <button>3</button>
          </td>
          <td rowSpan="2">
            <button className="equal">=</button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="zero">0</button>
          </td>
          <td>
            <button>.</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
