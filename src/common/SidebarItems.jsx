// SidebarItem.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, text, to, dropdownItems }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <li className='sidebarListItem' onClick={dropdownItems ? handleDropdown : null}>
      {icon && React.cloneElement(icon, { className: 'icon' })}
      {to ? (
        <Link to={to}>
          {text}
        </Link>
      ) : (
        <span>{text}</span>
      )}
      {dropdown && dropdownItems && (
        <ul className='sidebarList-under'>
          {dropdownItems.map((item) => (
            <li className='sidebarListItem-under' key={item.id}>
              <Link to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
