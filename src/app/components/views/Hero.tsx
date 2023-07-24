import { Button } from '@<prefix>/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Badge } from "src/components/ui/badge"
import headerpic from "/public/header pic.webp"
import Image from 'next/image'
import Logo1 from '/public/logo1.webp'
import Logo2 from '/public/logo2.webp'
import Logo3 from '/public/logo3.webp'
import Logo4 from '/public/logo4.webp'
import Wrapper from '@<prefix>/components/wrapper'
 const Hero = () => {
  return (
   <Wrapper>
     <section className=' flex flex-col lg:flex-row gap-y-10'>
         {/* Left Div */}
            <div className='flex-1'>
            <Badge className="py-1 px-5  rounded-lg bg-blue-200 text-blue-700 mt-14">Sale 70%</Badge>
            <h1 className="scroll-m-20 text-9xl font-extrabold tracking-tight lg:text-5xl mt-16">
        An Industrial Take on <br/> Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6  text-gray-600">
      Anyone can beat you but no one can beat your outfit as long as you wear<br/> Dine outfits.
      </p>
     
      <Button className='bg-black text-white text-sm font-semibold h-12 px-8 mt-10'><ShoppingCart className=' text-white'size={20} />Start Shopping
      </Button>
      {/* <ul className="flex justify-evenly text-3xl text-gray-400 font-sans mt-28">
      <li>BAZAAR</li>
      <li className='font-semibold underline'>B U S T L E</li>
      <li className='font-medium'>VERSACE</li>
      <li className='font-medium'>InStyle</li>
      </ul>
     */}

     <div className='flex justify-items-start gap-14 mt-36 font-extrabold '>
      
     <Image src={Logo1}  alt='logo'/> 
     <Image src={Logo2}  alt='logo'/> 
     <Image src={Logo3}  alt='logo'/> 
     <Image src={Logo4}  alt='logo'/>   
       
       
       </div>
    
            </div>
            {/* Right Div */}
               <div className="w-300 h-300 bg-orange-100 rounded-full">
                <Image src={headerpic} alt="hero"/>

               </div>
     </section>
</Wrapper>
  )
}
export default Hero
