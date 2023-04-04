import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './calculator'
import CalculatorButton from './CalculatorButton'

function App() {
  const numberButtons = [
    '.',0,'=','/',
    1,2,3,'*',
    4,5,6,'-',
    7,8,9,'+'
  ]
  return (
    <div>
      <div className='input-block'>
        <input style={{width:'100%', height:100, fontSize:60, textAlign:'right'}}/>
        <button class="button-81" role="button">Borrar</button>
      </div>
      <div className='two-row-block-container'>
        <div className='three-row-flexbox-container'>
          {numberButtons.map(value => <button class="button-58" role="button">{value}</button>)}
        </div>
      </div>
    </div>
    
  )
}

export default App
