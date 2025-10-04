import React from 'react';
import { useNavigate } from 'react-router-dom';
function ProfileSettings() {
 const navigate = useNavigate();
  const handleBackClickKk = () => {
    navigate(-1); 
  };

  return (
    <div>
<h4 style={{marginTop:"50px"}}>აქ არის მომხმარებლის პარამეტრები.</h4>
<button style={{marginTop:"50px",border:"2px solid red",height:"30px",background:"lightgreen",width:"150px",borderRadius:"12px"}} onClick={handleBackClickKk}>უკან დაბრუნება</button>

    </div>
  ) 
}

export default ProfileSettings;