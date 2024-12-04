import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './components.css';

const Gallery = () => {
  // State to hold the new image URL
  const [newImageURL, setNewImageURL] = useState('');
  const [galleryImages, setGalleryImages] = useState([
    'src/assets/sunrise.jpeg',
    'src/assets/sunset.jpeg',
    'src/assets/night.jpeg',
    'src/assets/ganesh.jpeg',
    'src/Assets/telescope.jpeg',
    'src/Assets/balcony.jpeg',
  ]);
  
  // Mock authentication check (replace with real authentication logic)
  const isAuthorized = true; // Set this to `true` or `false` based on user status

  // Handle new image URL change
  const handleImageURLChange = (event) => {
    setNewImageURL(event.target.value);
  };

  // Add new image to the gallery
  const addNewImage = () => {
    if (newImageURL.trim() !== '') {
      setGalleryImages([...galleryImages, newImageURL]);
      setNewImageURL(''); // Clear the input after adding
    } else {
      alert('Please enter a valid image URL.');
    }
  };

  return (
    <div>
      <Header />
      <div className="gallery">
        
        {galleryImages.map((image, index) => (
          <div className="photo" key={index}>
            <img src={image} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
      {isAuthorized && (
          <div className="add-image-section">
            <input
              type="text"
              placeholder="Enter image URL"
              value={newImageURL}
              onChange={handleImageURLChange}
            />
            <button onClick={addNewImage}>Add Image</button>
          </div>
        )}
      <Footer />
    </div>
  );
};

export default Gallery;
