import React, { useState } from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SidebarItem from '../common/SidebarItems'

export const Sidebar = ({ openSidebarToggle }) => {

  const [dropdown, setdropdown] = useState({
    drop: 0
  });



  // [
  //   {
  //     id: "inventory",
  //     "name": "inventory", 
  //     dropdown: true, 
  //     drop_down_active: false, 
  //     dropdown_menu: [{name: "add inventory", id: "add_inventory", to:""}],
  //     to:""
  //   }
  // ]

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
                  add inventory
                </Link>
              </li>
              <li className='sidebarListItem-under'>
                <Link to="/showinventry">
                  Show inventory
                </Link>
              </li>
            </ul>
          ) : null
        }





          <li className='sidebarListItem'>
         <Link to="/Invntory">
            <BsFillGrid3X3GapFill className='icon' /> Catagory
            </Link>
        </li>

      </ul>
    </aside>

  )
}
