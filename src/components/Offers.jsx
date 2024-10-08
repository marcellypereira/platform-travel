export default function Offers() {
  return (
    <div className="max-w-[1400px] mx-auto relative top-10 px-4">
      <div className="w-full h-full">
        <p className="xl:text-[25rem] lg:text-[20rem] absolute w-full text-center z-[-1] text-gray font-semibold opacity-10 top-[-10rem]">
          Travel
        </p>
      </div>
      <div> 
        <span className="flex flex-col items-center">
          <p className="text-primary font-bold capitalize tracking-[0.15em]">
            Inventore Veritais
          </p>
          <h2 className="text-4xl text-center font-bold capitalize my-4">
            Select Offers For Traveling
          </h2>
        </span>
        
        <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
          <span className="flex flex-col items-center text-center">
            <img src="image11.png" alt="Different Countries" />
            <p className="text-black mt-3">Different Countries</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <img src="image12.png" alt="Bus Tours" />
            <p className="text-black mt-3">Bus Tours</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <img src="image13.png" alt="Food Tours" />
            <p className="text-black mt-3">Food Tours</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <img src="image14.png" alt="Summer Rest" />
            <p className="text-black mt-3">Summer Rest</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <img src="image15.png" alt="Ship Cruises" />
            <p className="text-black mt-3">Ship Cruises</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <img src="image16.png" alt="Mountain Tour" />
            <p className="text-black mt-3">Mountain Tour</p>
          </span>
        </div>
      </div>
    </div>
  )
}
