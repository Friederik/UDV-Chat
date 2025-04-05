import './App.css'
import Message from './components/Message/Message'

function App() {
  return (
    <>
      <Message 
        author='Илья' 
        authorColor='green'
        text="Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum 
        has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make" 
        />
      <Message 
        author='Аня' 
        authorColor='orchid'
        text="Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum 
        has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make" 
        />
    </>
  )
}

export default App
  