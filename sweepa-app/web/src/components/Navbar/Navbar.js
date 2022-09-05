// import SweepaLogo from 'SweepaLogo.svg'

const Navbar = () => {
  return (
    <div>

      {/* Were going center content */}
      <div className="content-center p-5 pl-[120px] bg-black w-screen">

        <div className="flex flex-wrap">
          {/* if tailwind doesnt work after Redwood stepup restart the app */}
          {/* if you want custom fonts from adobe or google fonts you need @import inside index.css file */}
          {/* Were going need to inscreate the size of Sweepa so custom size */}
          {/* text-9xl	font-size: 8rem;  */}
        <div className="font-cooper lg:text-[200px] text-white pb-6
        md:text-[100px]
        ">
          Sweepa!
        </div>

        {/* SVG Logo*/}
          <div className="lg:p-20 md:p-5">
            {/* The size of SVG is a little small but we will come back to fix that later */}
            <img src="SweepaLogo.svg" alt="Sweepa Logo"/>
          </div>
        </div>

      {/* Sub Header Message */}
      <div className="font-cooper lg:text-7xl text-white lg:pl-96 md:text-4xl md:pl-36">
      Maid & Cleaners Service App.
      </div>
      </div>


    </div>
  )
}

export default Navbar
