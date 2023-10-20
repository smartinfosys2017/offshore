// Navigation.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navigation.css';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, onMenuItemClick }) => {
  const handleClick = () => {
    console.log(`Clicked on ${item.label}`);
    onMenuItemClick && onMenuItemClick(item);
  };

  return (
    <li className={item.submenu ? 'has-submenu' : ''}>
      <Link to={item.path} onClick={handleClick}>
        {item.label}
      </Link>
      {item.submenu && <SubMenu items={item.submenu} onMenuItemClick={onMenuItemClick} />}
    </li>
  );
};

const SubMenu = ({ items, onMenuItemClick }) => (
  <ul>
    {items.map((subItem) => (
      <MenuItem key={subItem.id} item={subItem} onMenuItemClick={onMenuItemClick} />
    ))}
  </ul>
);

const Navigation = ({ data, onMenuItemClick }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://offensivelogic.webmasterindia.net/api/';
        const response = await axios.post(apiUrl, { 'model': 'menuList' });
        if (response.data && response.data.returnCode !== 0) {
          setMenu(response.data.data.menu);
          console.log('Menu Data : ', response.data.data.menu);
        } else {
          console.error('Error or Unexpected Response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <header>
      <nav className="navigation">
        <div className="logo">
          <img src={data?.logo} alt="Logo" />
        </div>
        <ul>
          {menu.map((item) => (
            <MenuItem key={item.id} item={item} onMenuItemClick={onMenuItemClick} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
