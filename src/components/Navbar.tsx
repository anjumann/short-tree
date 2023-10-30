import Logo from '@/assets/logo.png'
import Image from 'next/image'
import CenterNavigation from './elements/CenterNavigation'
import { Button } from './ui/button'
const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between py-3 absolute px-36  ">
        <div className=" text-2xl  font-bold ">
          Stort-Tree
        </div>
        <div className="hidden md:block ">
          <CenterNavigation />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" >Btn 1</Button>
          <Button>Btn 2</Button>
        </div>
      </div>
    </>
  )
}

export default Navbar