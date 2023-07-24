
import Wrapper from '@<prefix>/components/wrapper'
import Image from 'next/image'
import p1 from "/public/P1.png"
import p2 from "/public/p2.png"
import p3 from "/public/p3.png"
import p4 from "/public/p4.png"
import p5 from "/public/p5.png"
import p6 from "/public/p6.png"
import ProductCard from '@<prefix>/components/ProductCard'
import { Products } from '@<prefix>/utils/mock'
const ProductLists = () => {
  return (
  
      <Wrapper>
      <div className=' text-center mt-20 '>
          <h3 className='text-blue-600 font-bold'>PRODUCTS</h3>
          <p className='text-4xl font-bold mt-3'>Check What We Have</p>
      </div>
      <div className=' flex justify-evenly gap-2 mt-16 hover:scale-100 duration-20'>

              <ProductCard title='Brushed Raglan Sweatshirt'price={195} img={p1} />
              <ProductCard title='Cameryn Sash Tie Dress'price={545} img={p4}/>
              <ProductCard title='Flex Sweatshirt'price={175} img={p2}/>
              {/* <ProductCard title='Muscle Tank'price={95} img={p6}/> */}
              {/* <ProductCard title='Pink Fleece Sweatpant'price={195} img={p5}/> */}
              {/* <ProductCard title='Flex Sweatpant'price={175} img={p3}/> */}

              
          </div>
          </Wrapper>
          
  )
}

export default ProductLists
