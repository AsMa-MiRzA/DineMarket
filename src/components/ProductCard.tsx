

import Image, { StaticImageData } from 'next/image'
import p1 from "/public/p1.png"
import p2 from "/public/p2.png"
import p3 from "/public/p3.png"
import p4 from "/public/p4.png"
import p5 from "/public/p5.png"
import p6 from "/public/p6.png"
import { FC } from 'react'

function ProductCard (props:{title:string,price:number,img:StaticImageData}) {
  return (

              <div className='hover:scale-150 duration-20'>
                  <Image src={props.img} alt="product" />
                  <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
                  <p className='font-bold text-lg'>${props.price}</p>
              </div>
            //    <div className='hover:scale-150 duration-10' >
            //       <Image src={p4} alt="product" />
            //       <h3 className='font-bold text-lg mt-3'>Cameryn Sash Tie Dress</h3>
            //       <p className='font-bold text-lg'>$545</p>
            //   </div> 

            //    <div className='hover:scale-150 duration-10'>
            //       <Image src={p3} alt="product" />
            //       <h3 className='font-bold text-lg mt-3'>Flex Sweatpant</h3>
            //       <p className='font-bold text-lg'>$175</p>
            //   </div>
            //   <div className='hover:scale-150 duration-10' >
            //       <Image src={p5} alt="product" />
            //       <h3 className='font-bold text-lg mt-3'>Pink Fleece Sweatpants</h3>
            //       <p className='font-bold text-lg'>$195</p>
            //   </div>
            //   <div className='hover:scale-150 duration-10'>
            //       <Image src={p6} alt="product" />
            //       <h3 className='font-bold text-lg mt-3'>Muscle Tank</h3>
            //       <p className='font-bold text-lg'>$75</p>
            //   </div> 
            //   <div className='hover:scale-150 duration-10'>
            //       <Image src={p2} alt="product" />
            //       <h3 className='font-bold text-lg mt-3'>Flex Sweatshirt</h3>
            //       <p className='font-bold text-lg'>$175</p>
            //   </div> 
          
    
  )
}

export default ProductCard