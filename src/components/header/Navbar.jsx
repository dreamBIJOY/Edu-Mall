import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../assets/image/hero image/logo.png'
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { Link } from 'react-router-dom';


function Navbar() {

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
    const menuRef = useRef(null)
    const toggleMenus = () => {
        setIsCategoriesOpen(!isCategoriesOpen)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsCategoriesOpen(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

    const [categories, setCategories] = useState ([])
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data)
        )
    },[])
    
  return (
    <div className='bg-white py-8 shadow-lg'>
        <div className='flex items-center w-10/12 mx-auto justify-between'>
            <div>
                <Link to='/'><img className='w-[180px]' src={Logo} alt="" /></Link>
            </div>

        
            <div onClick={toggleMenus} className='flex items-center gap-3 relative cursor-pointer' ref={menuRef}>
            <RiMenuUnfold3Fill size={35} className='' />
            <h1 className='text-xl font-semibold'>Category</h1>
            </div>

            <div>
               
                <ul className={`${isCategoriesOpen ? " text-xl text-gray-500 w-[300px] h-[560px] bg-white rounded-md absolute p-8 top-44 left-96 z-10 shadow-lg " : "hidden"}`}>
                   <li className='flex flex-col gap-4'>
                    {
                        categories.map((categorie, index) =>(
                           <Link to={`/categories/${categorie.id}`}>
                            <div className='flex gap-3 cursor-pointer' key={index}>
                                <img className='w-[20px] h-[20px]' src={categorie.icon} alt="" />
                                <h1 className=''>{categorie.name}</h1>
                            </div></Link>
                        ))
                    }
                   </li>
                </ul>
            </div>

            <div>
                <ul className='flex items-center gap-7'>
                    
                    <div className='flex gap-0.5 items-center'>
                    <Link to='/'><li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Home</li></Link>
                    </div>
                    
                    <div className='flex gap-0.5 items-center'>
                    <Link to='/courses'> <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Courses</li></Link>
                    </div>

                    <div className='flex gap-0.5 items-center'>
                    <Link to='/blog'> <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Blog</li></Link>
                    </div>

                    <Link to='/about'> <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>About Us</li></Link>
                
                    <Link to='/contact'><li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Contact Us</li></Link>
                    
                </ul>
            </div>

            <div className='relative'>
            <Link to='/cart'><PiShoppingBagOpenFill size={30} />
            <p className='w-[25px] h-[25px] bg-[#0071DC] rounded-full text-white text-lg grid place-items-center absolute -top-2 ml-5'>0</p></Link>
            </div>

            <div className='flex items-center gap-6'>
                <Link to='/login'> <button className='text-xl cursor-pointer font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Log in</button></Link>
                <Link to='/signup'><button className='btn px-4 py-7 cursor-pointer text-xl font-semibold rounded-lg border-none bg-[#e5f1fb] hover:bg-[#0d78dd] text-[#0d78dd] hover:text-white '>Sign Up</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar