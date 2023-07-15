import logo from "/public/Logo.webp"
import Image from "next/image"
import {BiSearch} from "react-icons/bi"
import {BsCart2} from "react-icons/bs"
import Link from "next/link"

const Header2 = () => {
    return (
        <div className="flex justify-between items-center py-6 px-24" >
            <Image className="w-40"
                src={logo} alt="logo" />
            <ul className="flex gap-x-10">
            <li className ="text-lg" >
                <Link href={"/"}>Female</Link></li>
            <li className ="text-lg" >
                <Link href={"/"}>Male</Link></li>
            <li className ="text-lg" ><Link href={"/"}>Kids </Link></li>
            <li className ="text-lg" ><Link href={"/"}>All Products </Link></li>
        </ul>
        <div className=" flex gap-1 border border-black rounded-lg px-2 ">
            <BiSearch size={20} />
            <input type ="text" placeholder = "What are you looking for?"/>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative hover:scale-150 duration-1">
            <BsCart2 size ={20}/>
             <span className = "w-4 h-4 text-xs flex justify-center items-center rounded-full bg-red-500 text-white  absolute bottom-6 left-5" >
               0 </span>       

        </div >
       
        </div>
  )
}


export default Header2;
