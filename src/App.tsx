import { ToastContainer } from "react-toastify"
import Header from "./components/Header/Header"
import Keyboard from "./components/Keyboard/Keyboard"

function App() {

  return (
    <>
    <Header/>
    <Keyboard/>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </>
  )
}

export default App
