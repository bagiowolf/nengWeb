import React, { Component, useState } from 'react'
import Head from './component/Index/App'
import './App.css'
import About from './component/About/App'
import Credit from './component/Credit/App'
import Team from './component/Team/App'
import LegalService from './component/LegalService/App'
export default function App() {
  const [select, setSelect] = useState(3)
  const [windowWidthValue, setWindowWidthValue] = useState(window.innerWidth)
  window.addEventListener('resize', () => {
    setWindowWidthValue(window.innerWidth)
  })
  return (
    <div className="App">
      {select === -1 && (
        <Head windowWidthValue={windowWidthValue} selectHandle={setSelect} />
      )}
      {select === 0 && <About onSetState={setSelect} state={select} />}
      {select === 1 && <Credit onSetState={setSelect} state={select} />}
      {select === 2 && <Team onSetState={setSelect} state={select} />}
      {select === 3 && <LegalService onSetState={setSelect} state={select} />}
    </div>
  )
}
