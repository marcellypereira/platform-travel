import { useState } from "react"

export default function Featured() {

  // eslint-disable-next-line react/prop-types
  const Card = ({packages, image, country, amount, rows}) => {
    const [divColor, setDivColor] = useState({
      bgColor: "",
      textColor: ""
    });
    return (
      <div className="relative overflow-hidden my-0 mx-auto rounded-2xl"
        style={{gridRow: `span${rows} / span${rows}`}} 
        onMouseEnter={() => 
          setDivColor({bgColor: '#6347f9', textColor: 'white'})
          } 
        onMouseLeave={() => 
          setDivColor({bgColor: 'white', textColor: '#6347f9'})
        }>
        <div 
          className="bg-white text-primary h-12 px-4 rounded-md absolute top-4 right-4 z-10 font-bold flex flex-col items-center justify-center text-lg"
          style={{
            backgroundColor: `${divColor.bgColor}`, 
            color:`${divColor.textColor}`
          }}
        >
          {packages} Packages</div>
        <img 
          src={image} 
          alt="" 
          className="h-full w-full rounded-2xl hoverImg object-cover" 
        />
        <div className="absolute bottom-4 left-4">
          <h2 className="text-white text-4xl font-bold">{country}</h2>
          <p className="text-white">Starting from ${amount}</p>
        </div>
      </div>
    )
  };
  return (
    <div className="max-w-[1400px] mx-auto relative mt-20">
      <div className="w-full h-full">
        <p className="xl:text-[25rem] lg:text-[20rem] absolute top-0 left-0 w-full text-center z-[-1] text-gray font-semibold opacity-10">
          Travel
        </p>
      </div>
      <div className="px-3 lg:mt-0 mt-12">
        <div> 
          <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">
              Feature Tours
            </p>
            <h2 className="text-4xl text-center font-bold capitalize my-4">
              Beautiful Places Around The World
            </h2>
          </span>
          <div className="flex lg:flex-1 lg:flex-row flex-col gap-8 my-12 h-full">
            <Card 
              amount="1200" 
              country="Paris" 
              image="image3.jpg" 
              packages="3" 
              rows="2"
            />
            <div className="flex flex-col gap-8">
              <Card 
                amount="1900" 
                country="Brazil" 
                image="image4.jpg" 
                packages="8" 
                rows="1"
              />
              <Card 
                amount="1500" 
                country="Japan" 
                image="image5.jpg" 
                packages="3" 
                rows="1"
              />
            </div>
            <Card 
              amount="1600" 
              country="London" 
              image="image6.jpg" 
              packages="3" 
              rows="2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}