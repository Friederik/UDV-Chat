import Chat from './components/Chat/Chat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from './styles/App.module.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className={classes.app}>
            <Chat/>
          </div>
        }/>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
  