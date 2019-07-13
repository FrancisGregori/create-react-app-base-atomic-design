import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'

import Header from 'components/templates/header/Header'
import Footer from 'components/templates/footer/Footer'
import 'app/assets/styles/App.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  )
}

export default App
