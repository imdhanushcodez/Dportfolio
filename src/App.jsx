import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'


function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
