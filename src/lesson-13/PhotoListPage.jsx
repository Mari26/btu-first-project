import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PhotoListPage(){
    const[photos,setPhotos]=useState([]);

    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/photos?_limit=20").then(res=>res.json())
.then(data=>{setPhotos(data)})},[])


    return( <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px',marginLeft:"100px" }}>
      {photos.map(photo => (
        <Link key={photo.id} to={`/photos/${photo.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px',height:'200px', textAlign: 'center' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p style={{ fontSize: '12px' }}>{photo.title}</p>
          </div>
        </Link>
      ))}
    </div>)
}

export default PhotoListPage;