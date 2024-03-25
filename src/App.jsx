import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
