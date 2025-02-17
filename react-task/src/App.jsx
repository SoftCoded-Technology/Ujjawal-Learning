import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/HEader'
import MaterialUI from './components/MaterialUI/MaterialUI'

function App() {

  return (
    <>
      {/* <Header/>
      <Outlet/> */}
      <MaterialUI/>
    </>
  )
}

export default App
