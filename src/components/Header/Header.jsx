import {useState} from "react";
import logo from "../../assets/logo.svg"

export const Header = () => {
  const [number, setNumber] = useState(0)

  const addNumber = () => {
    setNumber(prevState => prevState + 1)
  }

  // noinspection JSValidateTypes
  return (
    <header className="flex justify-center mb-[15px] header-text">
      <div className="flex gap-4 mt-10 py-2 px-5 rounded-3xl text-2xl leading-tight" style={{backgroundColor: "var(--color-brand)"}} >
        <img className="" src={logo} alt="" width="15"/>
        <div>1488</div>
      </div>
    </header>
  )
}