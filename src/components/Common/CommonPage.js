// CommonPage.js

import React from 'react';

const CommonPage = (props) => {
  const { state } = props.location;

  if (!state || !state.pageData) {
    // Handle the case where page data is not available
    return <div>No data available</div>;
  }

  const { body_en, title_en, caption_en } = state.pageData;

  return (
    <div>
      {/* Render HTML content received from the server */}
      <div dangerouslySetInnerHTML={{ __html: body_en }} />

      {/* You can add more elements based on your page structure */}
      <h2>{title_en}</h2>
      <p>{caption_en}</p>
      {/* Add more elements as needed */}
    </div>
  );
};

export default CommonPage;
