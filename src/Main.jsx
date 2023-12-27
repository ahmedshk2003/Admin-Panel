
import React, { useState } from 'react'
// import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'
import { Header } from './components/Header'


export const Main = (props) => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='gridContainer'>
            <Header
                openSidebar={openSidebar} />

            <Sidebar openSidebarToggle={openSidebarToggle} />
            <main className='mainContainer'>{props.children}</main>
            
        </div>
    )
}

