const SectionOne = () => {
  return (
    <div>
      <div className="p-5 pl-[120px] w-screen bg-white">
      {/* Section 1 */}
      <div className="flex ">
        {/* basis-1/2 */}
          <div className="basis-1/2 pl-20">
            <div className="font-cooper text-10xl text-black">
              Post a Cleaning Job!
            </div>
          </div>
        {/* basis 1/2 */}
          <div className="basis-1/2">
            {/* SVG 1st phone image */}
            <div className="">
              <img
              src="Photo1.svg"
              alt="Photo1"
              className='w-screen h-auto'
              style={{}}
              />
            </div>
          </div>
        </div>

{/* Divider */}

        <div className="flex relative">
          {/* were going need to apply positioning*/}
          <div className="flex">
            <div className="basis-1/2">
            <div className=" absolute left-0 top-0 font-cooper text-7xl  w-[880px]">
              Make Connections! Work With Who you Want!
            </div>
            </div>
            <div className="basis-1/2"></div>
          </div>
          {/* Photo2 */}
          <div className="">
          <img src="Photo2.svg"
          alt="Photo2"
          className='w-screen h-auto'
          style={{}}
          />
          </div>
          {/* Statement */}
          <div className=" absolute bottom-10 right-2 font-cooper text-7xl w-[650px]">
          A Sweepa!! is On The Way!
          </div>


        </div>

      </div>
    </div>
  )
}

export default SectionOne
