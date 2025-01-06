import { useState } from 'react'
import './App.css'
import {Footer, Header} from "./components/index.js";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Header></Header>*/}
      <Footer></Footer>

    </>
  )
}

export default App
