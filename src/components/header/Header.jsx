import {useState} from "react";

export const Header = () => {
  const [number, setNumber] = useState(0)

  const addNumber = () => {
    setNumber(prevState => prevState + 1)
  }

  return (
    <header className="head">
      <span>
        Number: {number}
      </span>

      <button onClick={addNumber}>
        Add
      </button>
    </header>
  )
}