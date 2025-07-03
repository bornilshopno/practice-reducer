import { Form, Route, Routes } from "react-router"
import Home from "./components/Home"
import NormalForm from "./components/NormalForm"
import Reducer from "./components/Reducer"


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/form" element={<NormalForm/>} />
        <Route path="/reducer" element={<Reducer/>} />
      </Routes>

    </>
  )
}

export default App
