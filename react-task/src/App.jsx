import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/HEader'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Form/> */}
      {/* <HistorySearch/> */}
    </>
  )
}

export default App
