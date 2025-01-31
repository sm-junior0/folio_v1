import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='text-gray-900 dark:text-gray-200 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l transition-colors duration-300'>
            <h1 className='text-3xl font-bold ml-4'>M. Junior</h1>
            <ul className='hidden md:flex z-50 items-center'>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#portfolio'>Portfolio</a></li>
                <li className='p-5'><ThemeToggle /></li>
                <li className='p-5'>
                    <a href='#contact' className='font-bold px-4 py-2 rounded-xl bg-primary-color text-white'>
                        Contact
                    </a>
                </li>
            </ul>

            <div onClick={handleNav} className='z-50 block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>  

            <div className={nav ? 
                'z-50 text-gray-900 dark:text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-200 dark:border-r-gray-800 bg-white dark:bg-gray-900 ease-in-out duration-500' 
                : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Manene Junior</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#about'>About</a></li>
                    <li className='p-2'><a href='#portfolio'>Portfolio</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>
                    <li className='p-2'><ThemeToggle /></li>
                </ul> 
            </div>
        </div>
    )
}

export default Navbar