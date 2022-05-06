import React from 'react';

const WebsiteLink = ({ website }) => {
  const link = website.includes('https://') ? website : `https://${website}`;

  return (
    <div className="website">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </div>
  );
};

export default WebsiteLink;
