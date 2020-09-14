import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function ColorPicker(props) {
  // Declare a new state variable, which we'll call "count"
  const [color, setColor] = useState('white');
  return (
    <div className="block" style={{ backgroundColor: color }}>
      <button
        onClick={() => setColor('#' + Math.random().toString(16).substr(-6))}
      >
        Create a random Color
      </button>
      <div className="ColorInNumber">{color}</div>
      <Userinput />
      <p>
        {props.hue}, {props.light}
      </p>
    </div>
  );
}

function Userinput() {
  return (
    <div id="Userinput">
      <form>
        <label>
          <p>Hue:</p>
          <input
            type="text"
            name="name"
            /*onChange={(e) => setColor(e.target.value)}*/
          />
          <p>Lightness</p>
          <input type="text" name="lightness" />
        </label>
        <br />
        <input type="submit" value="Choose a color" />
      </form>
    </div>
  );
}

ReactDOM.render(<ColorPicker />, document.getElementById('root'));
