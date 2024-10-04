import { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white"> 
      <div className="max-w-[1400px] mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src="logo.png" className="w-32" alt="" />
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">
              Home
            </a>
            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">
              Tours
            </a>
            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">
              Hotel
            </a>
            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">
              Pages
            </a>
            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">
              Blogs
            </a>
            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">
              Contact
            </a>
            <button className="bg-primary rounded shadow h-12 px-8 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary">Get Exploration</button>
          </ul>
          {dropdown ? (
            <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
              <MdClose />
            </div>
          ) : (
            <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown  && (
          <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                  Home
                </a>
                <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                  Tours
                </a>
                <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                  Hotel
                </a>
                <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                  Pages
                </a>
                <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                  Blogs
                </a>
                <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                  Contact
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}