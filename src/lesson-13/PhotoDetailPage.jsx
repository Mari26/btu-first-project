import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PhotoDetailPage(){
const { id } = useParams(); 
const navigate = useNavigate(); 
const [photo, setPhoto] = useState([]);
 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.json())
      .then(data => {
        setPhoto(data);
      });
  }, [id]);

    const handleBackClick = () => {
    navigate(-1); 
  };
    return (<div>
      <button style={{marginTop:"50px",border:"2px solid red",height:"30px",background:"lightgreen",width:"150px",borderRadius:"12px"}} onClick={handleBackClick}>უკან დაბრუნება</button>
      <h2 style={{marginTop:"20px"}}>{photo.title}</h2>
      <img src={photo.url} alt={photo.title} />
    </div>)
}

export default PhotoDetailPage;