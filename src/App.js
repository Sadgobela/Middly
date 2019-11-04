import React from 'react'
import Card from './components/Card'
import Header from './components/Header/mobile'
import Tabs from './components/Tabs'
import CreateNewList from './components/CreateNewList'
import Footer from './components/Footer'

import './App.scss'

const App = () => (
  <div className="App">
    <Header />
    <Tabs />

    <div className="Content">
      <CreateNewList />
      {[1, 2, 3].map((element, index) => (
        <Card key={index} />
      ))}
    </div>

    <Footer />
  </div>
)

export default App
