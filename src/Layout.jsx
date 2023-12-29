import React from 'react'
import { Home } from './components/Home'
import { Main } from './Main'
 import {
     BrowserRouter as Router,
     Route,
     Routes,
     Navigate,
 } from "react-router-dom";
import AddInventory from './pages/AddInventory';
import ShowInventory from './pages/ShowInventory';
import Invoice from './pages/Invoice';


const Layout = () => {

    return (
        <div>

            <Router>
                <Main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/addinventory' element={<AddInventory />} />
                        <Route path='/showinventry' element={<ShowInventory />} />
                        <Route path='/invoice' element={<Invoice/>} />
                    </Routes>
                </Main>
            </Router>
        </div>
    )
}

export default Layout
