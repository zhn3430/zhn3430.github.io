'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UpdatingImageBase64 = ({ url, intervalTime }) => {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        // console.log("data: " + data)
        setImageData(data); // Assuming the response contains the base64 encoded image data in `data.base64`
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    // Fetch image immediately and then at the specified interval
    fetchImage();
    const intervalId = setInterval(fetchImage, intervalTime);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [url, intervalTime]);

  console.log("something imagedata: " + imageData)

  return (
    <div>
      {imageData ? (
        <div className="basis-1/2 justify-center items-center">
          <img src={`data:image/jpeg;base64,`+imageData} alt="Updated" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

UpdatingImageBase64.propTypes = {
  url: PropTypes.string.isRequired,
  intervalTime: PropTypes.number.isRequired,
};

export default UpdatingImageBase64;
