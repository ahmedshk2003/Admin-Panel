import React, { useState } from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Sidebar = ({ openSidebarToggle }) => {

  const [dropdown, setdropdown] = useState({
    drop: 0
  });

  const handleInventry = () => {
    setdropdown((prev) => ({
      drop: prev.drop === 0 ? 1 : 0
    }));

  };

  const { drop } = dropdown

  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebarResponsive" : ""}>
      <div className='sidebarTitle'>
        <div className='sidebarBrand'>
          <BsCart3 className='iconHeader' /> SHOP

        </div>
        <span className='icon closeIcon'>X</span>

      </div>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>
          <Link to="/">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>

        </li>
        <li className='sidebarListItem' onClick={() => handleInventry()}>

          <BsFillArchiveFill className='icon' /> Inventory

        </li>
        {
          drop === 1 ? (

            <ul className='sidebarList-under'>
              <li className='sidebarListItem-under'>
                <Link to="/addinventory">
                  Add products
                </Link>
              </li>
              <li className='sidebarListItem-under'>
                <Link to="/showinventry">
                  Show products
                </Link>
              </li>
            </ul>
          ) : null
        }




          <li className='sidebarListItem'>
         <Link to="/invoice">
            <BsFillGrid3X3GapFill className='icon' /> Invoice
            </Link>
        </li>

        {/* <li className='sidebarListItem'>
          <a href=''>
            <BsPeopleFill className='icon' /> Customers
          </a>

        </li>
        <li className='sidebarListItem'>
          <a href=''>
            <BsListCheck className='icon' /> Inventory
          </a>

        </li>
        <li className='sidebarListItem'>
          <a href=''>
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>

        </li>
        <li className='sidebarListItem'>
          <a href=''>
            <BsFillGearFill className='icon' /> Setting
          </a>

        </li> */}
      </ul>
    </aside>

  )
}
