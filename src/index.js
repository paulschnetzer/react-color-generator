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

const buttonStyle = css`
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
const colorInNumber = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 400%;
  letter-spacing: 3px;
`;

const center = css`
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
      <button onClick={() => setColor(randomcolor())} css={buttonStyle}>
        RANDOM COLOR
      </button>

      <div css={block} style={{ backgroundColor: color }}>
        <div css={colorInNumber}>{color}</div>
      </div>
      <form onSubmit={handleSubmit} css={center}>
        <br />
        <br />

        <button type="submit" css={whiteButton}>
          CUSTOM COLOR
        </button>

        <label>
          <div>
            <p css={whitewords} for="hue">
              HUE
            </p>
            <input
              css={whiteinputTest}
              type="text"
              id="hue"
              value={hue}
              onChange={(e) => setHue(e.target.value)}
            />
            <br />
            <input
              type="radio"
              value="light"
              name="lightness"
              id="lightness"
              onChange={(e) => setLight(e.target.value)}
            />
            <label css={whitewords} for="lightness">
              Light Color
            </label>

            <br />

            <input
              type="radio"
              value="dark"
              name="lightness"
              id="darkness"
              onChange={(e) => setLight(e.target.value)}
            />

            <label css={whitewords} for="darkness">
              Dark Color
            </label>
          </div>
        </label>
      </form>
    </div>
  );
}

ReactDOM.render(<ColorPicker />, document.getElementById('root'));
