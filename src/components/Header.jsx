import React from 'react';
import Lottie from 'lottie-react';
import iconSearch from '../assets/json/search.json';
import iconMenu from '../assets/json/Menu.json';
import iconCart from '../assets/json/Cart.json';
import iconUser from '../assets/json/icons8-user-male.json';
import { Link } from 'react-router-dom';
import iconMarket from '../assets/json/Market.json';
import { Box } from '@mui/material';


function Header() {

    return (
        <header className='max-sm:p-4 flex justify-between border-b-2 sticky z-40 top-0 bg-gray-50 -mx-10 -mt-5 pt-1.5 h-20 px-12'>
            <div className='headerLogo'>
                <Link to={'/'} className="flex items-center pt-3" >
                    <div className='w-8'>
                        <Lottie className='w-10 me-2' animationData={iconMarket} />
                    </div>
                    <span className='font-bold text-xl mx-3 text-black'>Ecommerce</span>
                </Link>
            </div>
            <div className='max-sm:hidden flex mt-2 h-12 w-96'>
                <input type="text" id="" className="relative w-6 pl-3 pr-10 py-2 border-2 shadow-md shadow-gray-300 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..." />
                <div className='absolute ms-80 '>
                    <button type='sumbit' name='submit' className='w-7 bg-primary ms-5 mt-3 '>
                        <Lottie animationData={iconSearch} />
                    </button>
                </div>
            </div>
            <Box className='flex h-10 mt-3 border border-gray-300 rounded-full px-4'>
                <Lottie className='w-9 me-2' animationData={iconMenu} />
                <Lottie className='w-9 me-2' animationData={iconCart} />
                <Lottie className='w-7 h-7 mt-1 rounded-full border border-gray-300 ' animationData={iconUser} />
                <button className='sm:hidden w-7 bg-primary rounded-full ms-1 my-1'>
                    <Lottie animationData={iconSearch} />
                </button>
            </Box>
        </header>
    );
}

export default Header;