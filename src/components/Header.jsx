import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs"
import utils from '../utils'

export const Header = ({ openSidebar }) => {

    const loggedInDetails = JSON.parse(utils.getLocalStorage('loggedin'));
    return (
        <header className='header'>
            <div className='menuIcon'>
                <BsJustify className='icon' onClick={openSidebar} />
            </div>
            <div className='headerLeft'>
                <h1>Welcome, Mr.{loggedInDetails.email}</h1>
            </div>
            <div className='headerRight'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />

            </div>
            
        </header>
    )
}
