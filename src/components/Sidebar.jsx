import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'

export const Sidebar = ({openSidebarToggle}) => {
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
          <a href=''>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>

        </li>
        <li className='sidebarListItem'>
          <a href=''>
            <BsFillArchiveFill className='icon' /> Products
          </a>

        </li>
        <li className='sidebarListItem'>
          <a href=''>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </a>

        </li>
        <li className='sidebarListItem'>
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

        </li>
      </ul>
    </aside>

  )
}
