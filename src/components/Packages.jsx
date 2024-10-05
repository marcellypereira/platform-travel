import { HiStar } from "react-icons/hi"

/* eslint-disable react/prop-types */
export default function Packages() {
  const Card = ({image, text}) => {
    return (
      <div>
        <div className="overflow-hidden my-0 mx-auto rounded-2xl">
          <img src={image} alt="" className="rounded-2xl w-[300px] h-[300px] hoverImg" />
        </div>
        <h5 className="text-2xl py-4 font-semibold">{text}</h5>
        <span className="flex items-center justify-between">
          <div className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1">
            <HiStar className="text-orange" /> 
            <p>4.8</p>
          </div>
          <p>(2.5k Review)</p>
          <div className="bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg">
            $1200
          </div>
        </span>
      </div>
    )
  }
  return (
    <div className="bg-lightGray my-16 py-16 relative">
      <div className="max-w-[1400px] mx-auto px-3">
        <span className="flex flex-col items-center">
          <p className="text-primary font-bold capitalize tracking-[0.15em]">Popular Packages</p>
          <h2 className="text-4xl text-center font-bold capitalize my-4">Checkout our packages</h2>
        </span>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
          <Card 
            image="image7.jpg" 
            text="Enjoy The Beauty Place In Greece City" 
          />
          <Card 
            image="image8.jpg" 
            text="Enjoy The Beauty Place In Maldivas Beach" 
          />
          <Card 
            image="image9.jpg" 
            text="Enjoy The Beauty Place In Bhutan City" 
          />
          <Card 
            image="image10.jpg" 
            text="Enjoy The Beauty Place In Paris City" 
          />
        </div>
      </div>
    </div>
  )
}