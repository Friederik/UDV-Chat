import './App.css'
import MessageHistory, { MessageHistoryProps } from './components/MessageHistory/MessageHistory'

function App() {
  const user: MessageHistoryProps = {
    name: "Илья"
  }

  return (
    <>
      <MessageHistory name={user.name} />
    </>
  )
}

export default App
  