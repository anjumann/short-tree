import React from 'react'
import GithubIndia from '@/assets/github_india.svg'
import Image from 'next/image';
import heroBgPattern from '@/assets/bg.png'
import Navbar from './Navbar';
const Hero = () => {
  return (
    <>
      <div className={`w-full mx-auto bg-[url(https://githubindia.com/assets/images/hero-bg.png)] bg-no-repeat bg-cover relative `} >
        
        <div className="absolute inset-0 -z-20 flex justify-center items-center overflow-hidden  ">
          <Image src={heroBgPattern} width={1000} height={1000} alt='ajsfds'/>

        </div>

        <div className="w-fit mx-auto pt-28 text-6xl font-black text-center ">Let's build from here,<br /> in India</div>
        <div className="text-muted-foreground mt-3 text-center text-xl  "> Supporting India's open source and developer community </div>

        <div className="py-14 w-fit mx-auto">
          <Image src={GithubIndia} width={300} height={300} alt='github india logo' />
        </div>
      </div>

    </>
  )
}

export default Hero