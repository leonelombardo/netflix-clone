import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Home } from './pages/Home'

import { theme } from './theme'

export const App = () => {
  console.log(theme)

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  )
}