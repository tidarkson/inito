import React from 'react'
import logo from '../images/Logo Inito.png';

function Header() {
  return (
    <>
        <navbar className="relative flex items-center justify-between px-5 md:px-20 py-5 z-50 bg-white">
            <img src={logo} alt="" />
            <div className='flex items-center justify-center gap-8'>
                <ul className='lg:flex items-center justify-center gap-5 tracking-widest hidden lg:block'>
                    <li>About</li>
                    <li>Stories</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Contacts</li>
                </ul>
                <button className='px-5 py-2 rounded-full hidden md:block'>Get the inito kit</button>
            </div>
        </navbar>
    </>
  )
}

export default Header