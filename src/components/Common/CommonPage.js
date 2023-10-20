// CommonPage.js
import React from 'react';


const CommonPage = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default CommonPage;
