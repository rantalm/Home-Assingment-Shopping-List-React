import React from 'react'
import { useImmer } from 'use-immer'
import './App.scss'

import List from './components/List'
import Details from './components/Details'

/**
 * {
 * id: String,
 * name: String,
 * completed: Boolean,
 * details: {
 *  quantity: Number,
 *  amount: Number,
 *  description: 'String
 *  }
 * }
 */

function App() {
  const [list, setList] = useImmer([])

  return (
    <div className="App">
      <header className="header bg-green">
        <h1 className="main-title">ShoppingList</h1>
      </header>
      <div className="box-wrap">
        <List list={list} setList={setList} />
        <Details list={list} setList={setList} />
      </div>
    </div>
  )
}

export default App
