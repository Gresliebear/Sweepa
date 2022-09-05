const SectionTwo = () => {
  return (
    <div>
      <div className="p-5 pl-[120px] w-screen bg-black">
        {/* we to implement positions to position according to the original design */}
        <div className="flex flex-wrap">
        <div className="relative">
        <div className="basis-1/2">
          <div className="aboslute left-0 top-0 font-cooper text-white text-8xl">
            With Chat Features!
          </div>
        </div>
        {/* Photo3 Chat Features */}
        <div>
          <div className="basis-1/2">
            <img src="Photo3.svg" alt="ChatPhoto"
            className=' h-auto'
            style={{}}
            />
          </div>
        </div>
        <div className="basis-1/2">
        <div className=" absolute top-[170px] right-10 w-[900px] font-cooper text-white text-8xl">
          Create Your Own Business Pages
        </div>
        </div>

        {/* Photo4 Business Page */}
        <div className="p-12">
          <div className="absolute inset-y-[370px] right-0">
            <img src="Photo4.svg" alt="BusinessPagePhoto"
            className='h-auto'
            style={{}}
            />
          </div>
        </div>
        {/* The aboslute position is not working correctly I will need to debug this issue later */}
        <div className="font-cooper text-white text-11xl"> Search for Cleaners! </div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default SectionTwo
