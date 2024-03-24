import React from 'react';
import { PlusOutlined, } from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className='navbar shadow ' >
            <div className='container mx-auto'>
                <div className='flex h-[70px] justify-between items-center'>
                    <h1 className='text-2xl font-bold text-blue-600'> Navbar</h1>
                    <div className='flex gap-[4rem] h-[70px] items-center'>
                        {/* <ul className='flex gap-4 font-semibold text-slate-700'>
                            <li className='text-blue-500 hover:text-blue-600'><a href='#'>Home</a></li>
                            <li className='hover:text-blue-600'><a href='#'>Vechiles </a></li>
                            <li className='hover:text-blue-600'><a href='#'>Spare parts</a></li>
                            <li className='hover:text-blue-600'><a href='#'>Contacts</a></li>
                        </ul> */}
                        <div className='flex gap-2'>

                            <button className='bg-white border-blue-500 text-blue-700  flex items-center gap-2 p-2 rounded-3xl px-4 hover:bg-blue-800  font-semibold  hover:text-white border-2 border-blue'> <PlusOutlined /> Sell</button>
                            <a href='/login'><button className='bg-blue-500 border-blue-500 text-white  flex items-center gap-2 p-2 rounded-3xl px-4 hover:bg-blue-800  font-semibold   border-2 border-blue'>Login</button></a>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
