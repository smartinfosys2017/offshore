// App.js
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navigation from './components/Header/Navigation';
import Footer from './components/Footer/Footer';
import Slider from './components/Common/CustomSlider';
import CommonPage from './components/Common/CommonPage';
import Carousel from './components/Common/Carousel';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [pageContent, setPageContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);
  const [showSlider, setShowSlider] = useState(false);
  const [sliderComponent, setSliderComponent] = useState(null);

  const pageContentRef = useRef(pageContent);
  const sliderRef = useRef(pageContent);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://offensivelogic.webmasterindia.net/api/';
        const response = await axios.post(apiUrl, { model: 'systemConfiguration' });
        if (response.data && response.data.returnCode !== 0) {
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

  if (pageContent == null) {
    const HomePageCall = async () => {
      try {
        const api = axios.create({
          baseURL: 'https://offensivelogic.webmasterindia.net/api/',
        });
        const response = await api.post('', { model: 'pageDetail', pageId: '1' });
        if (response.data && response.data.returnCode !== 0) {
          console.log('API Response:', response.data.data.body_en);
          const updatedHtmlContent = response.data.data.body_en.replace(/\[SITEURL\]/g, 'https://offensivelogic.webmasterindia.net/');

          setPageContent(updatedHtmlContent);
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
      const response = await axios.post(apiUrl, { model: 'pageDetail', pageId: 1 });

      if (response.data && response.data.returnCode !== 0) {
        console.log('API Response:', response.data.data.body_en);
        const updatedHtmlContent = response.data.data.body_en.replace(/\[SITEURL\]/g, 'https://offensivelogic.webmasterindia.net/');


        setPageContent(updatedHtmlContent);
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
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
  };

// Display Slider

useEffect(() => {
  const checkAndSetSliderData = async () => {
    const uitemDivs = document.querySelectorAll('.uitem');
    if (uitemDivs.length > 0) {
      const newSliderData = Array.from(uitemDivs).map((div) => div.outerHTML);
      setSliderData(newSliderData);
      setShowSlider(true);
    }
  };

  const updateSliderContent = () => {
    const updatedPageContent = (
      <div className="react-slider">
        <Slider currentIndex={currentIndex} sliderData={sliderData} nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
    );
    const reactSliderDiv = document.querySelector('.react-slider');
    if (reactSliderDiv) {
      ReactDOM.render(updatedPageContent, reactSliderDiv);
    }
  };

  if (showSlider) {
    updateSliderContent();
  } else {
    checkAndSetSliderData();
  }
}, [showSlider, sliderData, currentIndex, nextSlide, prevSlide]);

// Display Carousel

  const images =   [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200',
    'https://placekitten.com/800/400',
    'https://placekitten.com/801/400',
    'https://placekitten.com/802/400',
  ];

  return (
    <Router>
      <Navigation data={apiData} onMenuItemClick={handleMenuItemClick} />
      <Routes>
        <Route path="/common" element={<CommonPage content={pageContent} />} />
        {/* <Route path="/" element={<Slider currentIndex={currentIndex} images={images} nextSlide={nextSlide} prevSlide={prevSlide} />} /> */}
      </Routes>
      <div>

        <div style={{ backgroundColor: 'black' }}  >
          {/* <Carousel images={images}/> */}
          <CommonPage content={pageContent} />
        </div>
      </div>

      <Footer data={apiData} />
    </Router>
  );
};
export default App


// git remote add origin https://github.com/smartinfosys2017/offshore.git
