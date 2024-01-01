import React, { useState } from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export const Sidebar = ({ openSidebarToggle }) => {

  const [dropdown, setdropdown] = useState({
    drop: 0
  });

const navigate= useNavigate()

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

  const sidebarListUnderStyle = {
    height: dropdown.drop === 1 ? "6rem" : "0", 
    overflow: "hidden",  
    transition: "height 0.5s ease" ,
    lisStyle:"armenian",
  };


  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebarResponsive" : ""}>
      <div className='sidebarTitle'>
        <div className='sidebarBrand'>
          <BsCart3 className='iconHeader' /> SHOP

        </div>
        <span className='icon closeIcon'>X</span>

      </div>
      <ul className='sidebarList'>
        <li className='sidebarListItem' onClick={()=> navigate("/")}>
          
            <BsGrid1X2Fill className='icon' /> Dashboard
    
        </li>
        <li className='sidebarListItem' onClick={() => handleInventry()}>

          <BsFillArchiveFill className='icon' /> Inventory

        </li>

            <ul style={sidebarListUnderStyle}>
              <li className='sidebarListItem-under'onClick={()=> navigate("/addinventory")} >
        
                  Add products
    
              </li>
              <li className='sidebarListItem-under' onClick={()=> navigate("/showinventry")}>
            
                  Show products
    
              </li>
            </ul>
         
          <li className='sidebarListItem' onClick={()=> navigate("/invoice")}>
        
            <BsFillGrid3X3GapFill className='icon' /> Invoice
  
        </li>

      </ul>
    </aside>

  )
}
