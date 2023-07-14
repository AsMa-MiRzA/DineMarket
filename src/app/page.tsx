import Image from 'next/image'
import Hero from './components/views/Hero'
import ProductLists from './components/views/ProductLists'
import Promotions from './components/views/Promotions'
import Unique from './components/views/Unique'
import Newsletter from './components/views/Newsletter'
import Footer from './components/views/Footer'

export default function Home() {
  return (
   <div className='py-6 px-24'>
    <Hero />
    <Promotions />
   <ProductLists />
   <Unique />
   <Newsletter/>
   <Footer />
   </div>

  )
}
