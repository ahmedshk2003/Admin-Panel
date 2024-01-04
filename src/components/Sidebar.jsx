import React, { useState } from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import utils from "../utils/index";
import { useDispatch, useSelector } from "react-redux";
import signout from "../redux/slices/Logedin"
// import Loggedin_ITEMS from "../redux/Store"

export const Sidebar = ({ openSidebarToggle }) => {

  const [dropdown, setdropdown] = useState({
    drop: 0
  });

  
  // signout functionality 
  // const SignupData = useSelector((state) => {
  //   return state.Loggedin_ITEMS;
  // })
  
  const dispatch= useDispatch()
  function gettinglocalStore() {
    const signoutdetails = JSON.parse(utils.getLocalStorage('validation'));
    const  signoutInt= Number(signoutdetails)
    return signoutInt=0
  }

  const handleSignout= ()=>{
    dispatch(signout())
    gettinglocalStore()
  }


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

  //use navigate for router
  const navigate = useNavigate()


  const sidebarListUnderStyle = {
    height: dropdown.drop === 1 ? "6rem" : "0",
    overflow: "hidden",
    transition: "height 0.5s ease",
    lisStyle: "armenian",
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
        <li className='sidebarListItem' onClick={() => navigate("/")}>

          <BsGrid1X2Fill className='icon' /> Dashboard

        </li>
        <li className='sidebarListItem' onClick={() => handleInventry()}>

          <BsFillArchiveFill className='icon' /> Inventory

        </li>

        <ul style={sidebarListUnderStyle}>
          <li className='sidebarListItem-under' onClick={() => navigate("/addinventory")} >

            Add products

          </li>
          <li className='sidebarListItem-under' onClick={() => navigate("/showinventry")}>

            Show products

          </li>
        </ul>

        <li className='sidebarListItem' onClick={() => navigate("/invoice")}>

          <BsFillGrid3X3GapFill className='icon' /> Invoice

        </li>

      <li className='sidebarListItem' onClick={() => navigate("/CustomerRiview")}>

          <BsFillGrid3X3GapFill className='icon' /> Clients Review

        </li>         

        <Button button={"Sign Out"} className={"signout-button"} onclick={() => handleSignout()} />


      </ul>
    </aside>

  )
}
