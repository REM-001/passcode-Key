import { IoLogoFoursquare } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";


const Navbar = () => {
  return (
    <div className="bg-sky-400 flex items-center w-screen justify-between h-16 px-16">
      <div className="logo flex items-center cursor-pointer">
        <IoLogoFoursquare color="white" className="text-4xl" />
        <span className="text-white text-2xl font-bold">lex</span>
      </div>
      <div className="cart flex items-center gap-2 cursor-pointer">
        <TbShoppingBag color="white" fontSize={24}/>
        <span className="text-white text-l font-bold">0</span>
      </div>
    </div>
  )
}

export default Navbar
