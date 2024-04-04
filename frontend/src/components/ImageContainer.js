import React from 'react'

const ImageContainer = ({ image, loading}) => {
  return (
    <div className='image-container'>
      { loading && (<p>Loading...</p>)}
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Error"
          style={{maxWidth: "100%", maxHeight : "100%"}}
        />
      )}
    </div>
  )
}

export default ImageContainer;