const SectionThree = () => {
  return (
    <div>
      <div className="p-5 pl-[120px] w-screen bg-white">
      <div className="flex flex-wrap">
      {/* header on the section page */}
      <div className="flex">
        <div className="basis-5/6">
        <div className="font-cooper text-10xl">
          No Five Star Reviews!
        </div>

        </div>
        {/* Photo5  */}
        <div className="basis-1/2 pt-20">
          <img src="Photo5.svg" alt="starsNomore"
          className='w-screen h-auto'
              style={{}}
              />
        </div>
      </div>
      <div>
      <div className="font-cooper text-8xl">
        Cleaners Review Customers!
        </div>
        <div className="font-cooper text-8xl">
          Customers Review Cleaners!
        </div>
        </div>
      {/* divider */}
      <div className="flex flex-wrap">
        <div>
          <img  src="Photo6.svg" alt="ReviewsCompare" className='w-screen h-auto'
              style={{}}
              />
        </div>
        <div className="pb-10">
          <div className="font-cooper text-11xl">
            Honest Reviews!
          </div>
          <div className="font-cooper text-8xl">
          No More One-Sided Reviews!

          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default SectionThree
