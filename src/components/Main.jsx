
import React, { useState } from 'react'
// import { Header } from './components/Header'
import { Sidebar } from './Sidebar'
import { Home } from './Home'
import { Header } from './Header'


export const Main = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (

        <div className='gridContainer'>
            <Header
                openSidebar={openSidebar} />

            <Sidebar openSidebarToggle={openSidebarToggle} />
            <Home />

        </div>

    )
}

