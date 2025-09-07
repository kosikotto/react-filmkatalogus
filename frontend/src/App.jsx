import { Routes, Route } from 'react-router-dom'

import './css/App.css'
import Header from './components/header/Header.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import Watched from './pages/Watched.jsx'
import Footer from './components/footer/Footer.jsx'
import { useState, createContext } from 'react'

export const DataContext = createContext();

function App() {

  const [favorites, setFavorites] = useState({});
  const [watched, setWatched] = useState({});

  return (
    <>
      <Header />
        <DataContext.Provider value={{ favorites, setFavorites, watched, setWatched }}>
          <Routes>
            <Route path='/filmkatalogus' element={<Home />}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>
            <Route path='/watched' element={<Watched />}></Route>
          </Routes>
        </DataContext.Provider>
      <Footer />
    </>
  )
}

export default App
