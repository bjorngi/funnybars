import React, { useState, useEffect } from 'react';
import './App.css';

const BAR_WIDTH_MAX=500
const BAR_WIDTH_MIN=100

const barStyle = (width, color) => ({
  width: `${width}px`,
  background: color,
})

const funnyRows = (rows) => {
  return Array(rows).fill().map(() => (<div className='bars'>{funnyBars(10)}</div>))
}

const funnyBars = (bars) => {
  return Array(bars).fill().map(() => <FunnyBar />)
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {funnyRows(20)}
      </header>
    </div>
  );
}

const getRandomColorHex = () => '#'+Math.floor(Math.random()*16777215).toString(16);
const getRandomIntBetween = (from, to) => Math.floor(Math.random()*(to-from)+from)

const FunnyBar = () => {
  const [barWidth, setWidth] = useState(getRandomIntBetween(BAR_WIDTH_MIN, BAR_WIDTH_MAX))
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
    <span style={barStyle(barWidth, color)} className='bar'>
    </span>
  )
}

export default App;
