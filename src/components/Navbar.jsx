export default function NavBar() {

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white"> 
      <div className="max-w-[1400px] mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src="logo.png" className="w-32" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 cursor-pointer">
            <p className="font-bold">Ajuda</p>
            <img src="image18.png" className="" alt="" />
          </div>
        </div>
      </div>
    </nav>
  )
}