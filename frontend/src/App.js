import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import UploadContainer from './components/UploadContainer';
import ResultsContainer from './components/ResultsContainer';
import Footer from './components/Footer';
import About from './components/About';
import axios from 'axios';
import { Buffer } from 'buffer'; 

function App() {
  // App settings
  const title = "Traffic";
  const apiUrl = "https://localhost:3000";
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(null);
  
  const handleFileChange = (e) => {
    setResult(null);
    setCount(null);
    console.log(e.target.files[0])
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    uploadFile();
  }

  const uploadFile = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);
    console.log(formData)
    await axios.post(`${apiUrl}/api/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      const imageBlob = new Blob([Buffer.from(response.data.processed_image, 'base64')], { type: 'image/png' });
      setLoading(null);
      setResult(imageBlob);
      setCount(response.data.vehicle_count)
    })
    .catch(error => {
        console.error('Error uploading image:', error);
        setLoading(null);
    });
  };

  return (
    <div id='home' className="App">
      <NavBar
        title = {title}
      />
      <main>
      <About />
      <UploadContainer
        handleFileChange = {handleFileChange}
        handleUpload = {handleUpload}
      />
      <ResultsContainer
        selectedFile = {selectedFile}
        result = {result}
        loading = {loading}
        count = {count}
      />
      </main>
      <Footer />
    </div>
  );
}

export default App;
