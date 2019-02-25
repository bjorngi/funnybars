import React, { useState, useEffect } from 'react';
import './App.css';

const BAR_WIDTH_MAX=500
const BAR_WIDTH_MIN=100
const NUMBER_OF_ROWS=10

const barStyle = (width, color) => ({
  width: `${width}px`,
  background: color,
})

const funnyRows = (rowHeight, bars) => {
  return Array(NUMBER_OF_ROWS).fill().map(() => (
    <div className='bars' style={{height: rowHeight}}>
      {funnyBars(bars)}
    </div>))
}

const funnyBars = (bars) => {
  return Array(bars).fill().map(() => <FunnyBar />)
}

const App = () => {
  const [rowHeight, setRows] = useState(Math.ceil(window.innerHeight / NUMBER_OF_ROWS))
  const [bars, setBars] = useState(Math.ceil(window.innerWidth / (BAR_WIDTH_MAX/2)))

  useEffect(() => {
    window.addEventListener('resize', () => {
      setRows(Math.ceil(window.innerHeight / NUMBER_OF_ROWS))
      setBars(Math.ceil(window.innerWidth / (BAR_WIDTH_MAX/2)))
    });
  })

  return (
    <div className="App">
      <div className="text">
        Weee!
      </div>
        {funnyRows(rowHeight, bars)}
    </div>
  );
}

const getRandomColorHex = () => '#'+Math.floor(Math.random()*16777215).toString(16);
const getRandomIntBetween = (from, to) => Math.floor(Math.random()*(to-from)+from)

const FunnyBar = () => {
  const [barWidth, setWidth] = useState(0)
  const [color, setColor] = useState(getRandomColorHex())

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(getRandomIntBetween(BAR_WIDTH_MIN, BAR_WIDTH_MAX))
      setColor(getRandomColorHex())
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <span style={barStyle(barWidth, color)} className='bar' />
  )
}

export default App;
