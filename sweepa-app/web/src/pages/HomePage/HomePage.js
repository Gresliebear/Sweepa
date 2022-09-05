import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from 'src/components/Navbar/Navbar'
import SectionOne from 'src/components/SectionOne/SectionOne'
import SectionThree from 'src/components/SectionThree/SectionThree'
import SectionTwo from 'src/components/SectionTwo/SectionTwo'
import Footer from 'src/components/Footer/Footer'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* Flex container on the outside */}
      <div className='flex grow shrink flex-wrap w-screen'>
        {/* Navbar */}
        <Navbar> </Navbar>
        {/* SectionOne - flex */}
        <SectionOne> </SectionOne>
        {/* SectionTwo - flex */}
        <SectionTwo> </SectionTwo>
        {/* SectionThree - flex */}
        <SectionThree> </SectionThree>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default HomePage
