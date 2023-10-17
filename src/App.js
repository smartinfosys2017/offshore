// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navigation from './components/Header/Navigation';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer'
import CommonPage from './components/Common/CommonPage';
import './App.css';





const App = () => {
  const [apiData, setApiData] = useState(null);
  const [pageContent, setPageContent] = useState(null);
  const [path, setPath] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://offensivelogic.webmasterindia.net/api/';
        const response = await axios.post(apiUrl,    {'model': 'systemConfiguration'} );
        if (response.data && response.data.returnCode != 0) {
          setApiData(response.data.data);
        } else {
          console.error('Error or Unexpected Response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 


  if(pageContent == null){
    const HomePageCall = async () => {
    try {

      const api = axios.create({
        baseURL: 'https://offensivelogic.webmasterindia.net/api/',
      });

      // const apiUrl = 'https://offensivelogic.webmasterindia.net/api/';

      const response = await api.post('/your-endpoint', { model: 'pageDetail', pageId: '1' });
      if (response.data && response.data.returnCode !== 0) {
        console.log('API Response:', response.data.data.body_en);
        const updatedHtmlContent = response.data.data.body_en.replace(/\[SITEURL\]/g, 'https://offensivelogic.webmasterindia.net/');
        setPageContent(updatedHtmlContent);
        // Handle the API response here
      } else {
        console.error('Error or Unexpected Response:', response.data);
      }
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };
  HomePageCall();
}
  


  const handleMenuItemClick = async (item) => {
    console.log('Clicked on:', item.label);
    console.log('pageId:', item.pageId);
    try {
      const apiUrl = 'https://offensivelogic.webmasterindia.net/api/';
      // const response = await axios.post(apiUrl, { 'model': 'pageDetail', 'pageId': item.pageId });
      const response = await axios.post(apiUrl, { 'model': 'pageDetail', 'pageId': 1 });

      if (response.data && response.data.returnCode !== 0) {
        console.log('API Response:', response.data.data.body_en);
        const updatedHtmlContent = response.data.data.body_en.replace(/\[SITEURL\]/g, 'https://offensivelogic.webmasterindia.net/');
        // setPageContent(response.data.data.body_en);
        setPageContent(updatedHtmlContent);
        // Handle the API response here
      } else {
        console.error('Error or Unexpected Response:', response.data);
      }
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  const divStyle = {
    backgroundColor: 'black',
  };

  // <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>


  return (
    <Router>
        <Navigation data={apiData}   onMenuItemClick={handleMenuItemClick} />
          <Routes>
            {/* <Route path="/home" element={<HomePage />} />
            <Route exact path="/what-is-cms-pro" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} /> */}
            {/* <Route  CommonPage/> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <div style={divStyle} dangerouslySetInnerHTML={{ __html: pageContent }}></div>
        <Footer data={apiData}/> 
    </Router>
    
  );
};

export default App;
