import Wrapper from '@<prefix>/components/wrapper'
import React from 'react'
import Image from 'next/image'
import Unique1 from '/public/unique1.webp'
const Unique = () => {
  return (
    
    //  <div className='flex flex-row-reverse font-serif text-5xl font-bold items-end  py-32 text-left leading-tight  tracking-wide'>
    //     <h1>Unique and Authentic<br/> Vintage Designer<br/> Jewellery</h1>
    //     </div>

    <Wrapper>
<div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 col-start-1 h-full w-full  xl:col-start-2">
          <h3 className="text-[2.5rem] sm:text-[2.75rem] tracking-[0.03em] leading-tight mb-2 font-bold py-36">
          Unique and Authentic<br/> Vintage Designer<br/> Jewellery
          </h3>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-5 ">
          <div className="relative col-span-2 h-full w-full  xl:col-span-1 ">
            <div className="grid grid-cols-2 gap-10 mr-20">
              <div className=" space-y-1 mt-2">
                <h4 className='text-lg tracking-wide font-bold'>Using Good Quality<br/> Materials</h4>
                
                <p className="tracking-wide mt-3">
                Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit.
                </p>
              </div>
              <div className=" ">
                <h4  className='text-lg tracking-wide font-bold'>100% Handmade<br/>Products</h4>
                <p className="tracking-wide mt-3">
                  Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit.
                </p>
              </div>
              <div className=" ">
                <h4 className='text-lg tracking-wide font-bold mt-5'>Modren Fashion Design</h4>
                <p className="tracking-wide mt-3">
                    Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit.tracking-wide 
              </p>
              </div>
              <div className=" ">
                <h4 className='text-lg tracking-wide font-bold mt-5'>Discount For Bulk Orders</h4>
                <p className="tracking-wide mt-3">
                Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden text-[5rem] sm:text-8xl font-extrabold tracking-widest text-gray-200/70 -z-[10]">
              Different from <br/> others
            </div>
          </div>
          <div className="col-span-2   xl:col-span-1 space-y-3">
            <div className="flex flex-col h-full w-full items-center justify-center gap-5 mt-2 sm:flex-row">
              <div className="basis-1/2  w-full flex justify-center ">
                <Image
                  src={Unique1}
                  alt=""
                   width={250}
                 height={250}
                  className="mt-2"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5  basis-1/2 ">
                <p className="tracking-wider leading-7 text-lg text-justify ">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <button className="w-36 bg-black p-2  text-sm text-white">
                  See All Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Unique
