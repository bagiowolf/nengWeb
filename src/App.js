import React, { Component, useState } from 'react'
import Head from './component/Index/App'
import './App.css'
import About from './component/About/App'
import Credit from './component/Credit/App'
import Team from './component/Team/App'
import LegalService from './component/LegalService/App'
import Cooperate from './component/Cooperate/App'
import NewsCenter from './component/NewsCenter/App'
import Join from './component/Join/App'
import Case from './component/Case/App'
import ContactUs from './component/ContactUs/App'

export default function App() {
  const [select, setSelect] = useState(2)
  const [windowWidthValue, setWindowWidthValue] = useState(window.innerWidth)
  window.addEventListener('resize', () => {
    setWindowWidthValue(window.innerWidth)
  })
  return (
    <div className="App">
      {select === 0 && (
        <Head
          windowWidthValue={windowWidthValue}
          selectHandle={setSelect}
          onSetState={setSelect}
          state={select}
        />
      )}
      {select === 1 && (
        <About
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 2 && (
        <Credit
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 3 && (
        <Team
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 4 && (
        <LegalService
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 5 && (
        <Cooperate
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 6 && (
        <NewsCenter
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 7 && (
        <Join
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 8 && (
        <Case
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
      {select === 9 && (
        <ContactUs
          onSetState={setSelect}
          state={select}
          windowWidthValue={windowWidthValue}
        />
      )}
    </div>
  )
}
