import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path=''>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
