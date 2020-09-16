import { useState } from 'react';
import ReactDOM from 'react-dom';
import randomcolor from 'randomcolor';
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';

const whitewords = css`
  font-size: 120%;
  color: white;
  letter-spacing: 5px;
  font-weight: bold;
`;
const globalStyles = css`
  body {
    margin: 0;
    padding-top: 0;
    border: border-box;
    font-family: Lato;
    background: url('background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Button = css`
  margin: 30px auto;
  display: block;
  border: solid black 4px;
  background-color: transparent;
  height: 100px;
  width: 200px;
  font-size: 200%;
`;

const whiteButton = css`
  color: white;
  margin: 40px auto;
  display: block;
  border: solid white 4px;
  background-color: transparent;
  height: 80px;
  width: 200px;
  font-size: 200%;
`;

const block = css`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;
const ColorInNumber = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 400%;
  letter-spacing: 3px;
`;

const form = css`
  text-align: center;
`;

const whiteinputTest = css`
  background-color: transparent;
  height: 40px;
  font-size: 120%;
  color: white;
`;

function ColorPicker() {
  const [color, setColor] = useState('white');
  const [hue, setHue] = useState('');
  const [light, setLight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(randomcolor({ hue: hue, luminosity: light }));
  };
  return (
    <div>
      <Global styles={globalStyles} />
      <button onClick={() => setColor(randomcolor())} css={Button}>
        RANDOM COLOR
      </button>

      <div css={block} style={{ backgroundColor: color }}>
        <div css={ColorInNumber}>{color}</div>
      </div>
      <form onSubmit={handleSubmit} css={form}>
        <br />
        <br />

        <button type="submit" css={whiteButton}>
          CUSTOM COLOR
        </button>

        <label>
          <p css={whitewords}>HUE</p>

          <input
            css={whiteinputTest}
            type="text"
            value={hue}
            onChange={(e) => setHue(e.target.value)}
          />
          <div>
            <br />
            <input
              type="radio"
              value="light"
              name="ligtness"
              onChange={(e) => setLight(e.target.value)}
            />

            <span css={whitewords}>Light Color</span>
            <br />

            <input
              type="radio"
              value="dark"
              name="ligtness"
              onChange={(e) => setLight(e.target.value)}
            ></input>

            <span css={whitewords}>Dark Color</span>
          </div>
        </label>
      </form>
    </div>
  );
}

ReactDOM.render(<ColorPicker />, document.getElementById('root'));
