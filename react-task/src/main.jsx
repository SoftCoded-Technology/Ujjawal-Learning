import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './components/Form/Form.jsx'
import HistorySearch from './components/History/HistorySearch.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import TodoList from './components/Todo/TodoList.jsx'


const router = createBrowserRouter([{
  path : "/",
  element : <App/>,
  children : [
    {
      path : "/form",
      element : <Form/>
    },
    {
      path : "/history",
      element : <HistorySearch/>
    },
    {
      path : "/todo",
      element : <TodoList/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  
)
