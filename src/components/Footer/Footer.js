import React from 'react';
import './Footer.css'; // Import the CSS file
import Navigation from '../Header/Navigation';
import Address from '../Address/Address';


const Footer = ({ data }) => {
  return (
        <footer>
            <Navigation data={data}/>
            <Address data={data}/>
            <p>&copy;2023 {data?.company}. All Right Reserved.</p>
        </footer>
      
  );
};

export default Footer;