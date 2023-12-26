import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs"

export const Header = ({ openSidebar }) => {
    return (
        <header className='header'>
            <div className='menuIcon'>
                <BsJustify className='icon' onClick={openSidebar} />
            </div>
            <div className='headerLeft'>
                <h1>Mr.Ahmed Shaikh</h1>
            </div>
            <div className='headerRight'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />

            </div>



        </header>
    )
}
