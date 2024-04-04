import React from 'react';

const UploadContainer = ({ handleFileChange, handleUpload }) => {

  return (
    <div id = 'upload' className='upload-container'>
      <h3>Upload Your image here 👇</h3>
      <form className='upload-form'>
        <input type="file" onChange={handleFileChange} />
        <button className='upload-btn' onClick={handleUpload}>Upload</button>
      </form>
    </div>
  )
}

export default UploadContainer;