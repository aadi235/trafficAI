import React from 'react';
import ImageContainer from './ImageContainer';

const ResultsContainer = ({ selectedFile, result, loading, count}) => {

  return (
    <div className='results-container'>
      <div className='results-image-container'>
        <ImageContainer
          image = { selectedFile } 
        />
        <ImageContainer
          image = { result }
          loading = { loading }
        />
      </div>
      <p> Number of vehicle{count > 1 && 's'} : { count === null ? '----' : count }</p>
    </div>
  )
}

export default ResultsContainer