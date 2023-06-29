import './App.css'

import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Slug from './Pages/Slug'
import SharedLayout from './Layouts/SharedLayout'
import Roadmap from './Pages/Roadmap'

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<SharedLayout />}>
          <Route index element={<Navigate to='home' />} />
          {/* <Route index element={<Home />} /> */}
          <Route path='home' element={<Home />} />

          <Route path='roadmap' element={<Roadmap />} />

          <Route path='projects'>
            <Route path=':slug' element={<Slug />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
