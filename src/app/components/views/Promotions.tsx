import Image, { StaticImageData } from 'next/image'
import Wrapper from '@<prefix>/components/wrapper'
import event1 from '/public/event1.webp'
import event2 from '/public/event2.webp'
import event3 from '/public/event3.webp'
import React from 'react'
import Promotion1 from './Promotion1'
// import Promotion2 from './Promotion2'
// const Promotions = () => {
//     return (
//         <>

//             <div className=' text-center mt-24 '>
//                 <h3 className='text-blue-600 font-bold'>PROMOTIONS</h3>
//                 <p className='text-4xl font-bold mt-3'>OUR PROMOTIONS EVENTS</p>
//             </div>

//             <section>
//             <main className='flex justify-evenly'>

//                 {/* Right side */}
     
//                      <div className='flex justify-end bg-gray-300 items-center w-2/4 h-52 mt-7 '> 

//                          <div className=' bg-gray-300 py-10 px-2  '> 
//                             <h1 className='text-3xl font-bold bg-gray-300'> GET UPTO 60%</h1>
//                             <p className='font-semibold text-lg bg-gray-300 '> For the summer season</p>
//                             </div> 

//                         <Image src={event1} alt='product' className='ml-36' />
                        
//                     </div >
                     
                 
//                 {/* left side */}
//                 <div className='flex gap-5 mt-6'>
                  
//                 <div className='bg-orange-100 py-7 px-4'  >
//                          <h1 className=' bg-orange-100 '>Flex Sweatshirt</h1>
//                      <p className='bg-orange-100 ' ><del>$100.00</del> <b> $75.00</b></p>
                  
//                     <Image src={event2} alt='product'className="bg-orange-100"/> 
//                       </div>
//                     <div className='bg-gray-300  py-7 px-4 '>
//                         <h1 className=' '>Flex Push Button Bomber</h1>
//                         <p className='' ><del>$225.00</del> <b> $190.00</b></p>
//                         <Image src={event3} alt='product' />
//                     </div>
//                 </div>
//             </main>
//             <div className=''>
//                     <Promotion1 /> 
                    
//                     </div>
//                     </section>
       
           
//         </>
//     )
// }

// export default Promotions

const Promotion = () => {
    return (
       <Wrapper>
    
       
           <div className=' text-center mt-24 '>     
                     <h3 className='text-blue-600 font-bold'>PROMOTIONS</h3>
                <p className='text-4xl font-bold mt-3'>OUR PROMOTIONS EVENTS</p>
             </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full">
          <div className="sm:col-span-2 space-y-2">
            <div className=" bg-[#d6d6d8]  flex justify-center items-center px-5">
              <div>
                <h4>
                  GET UP TO <span className="text-2xl">60%</span>
                </h4>
                <p>For the summer season</p>
              </div>
              <Image src={event1} alt="product" />
            </div>
            <div className="flex flex-col items-center justify-center  bg-[#212121] h-48 py-5 text-center text-white">
              <h3>GET 30% Off</h3>
              <p className="text-xs">USE PROMO CODE</p>
              <button className="bg-[#474747] px-8 py-3 tracking-widest text-white text-xs mt-1">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          <div className=" bg-[#efe1c7]">
            <div className="p-5">
              <p>Flex Sweatshirt</p>
              <p className="text-base">
                <span className="line-through text-sm mr-1">$100.00</span> $75.00
              </p>
            </div>
            <Image
              alt=""
              src={event2}
            //   width={220}
            //   height={220}
              className="mx-auto"
            />
          </div>
          <div className=" bg-[#d7d7d9]">
            <div className="p-5">
              <p className="capitalize">Flex Push button bombar</p>
              <p className="text-base">
                <span className="text-sm line-through mr-1">$225.00</span>$190.00
              </p>
            </div>
            <Image
              alt=""
              src={event3}
            //   width={220}
            //   height={220}
              className="mx-auto"
            />
          </div>
        </div>
        </Wrapper>
     
    );
  };
  
  export default Promotion;
