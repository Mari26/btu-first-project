import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function ProfilePage() {
  return (
    <div style={{ border: '1px solid green', padding: '20px' }}>
      <h2>პროფილის გვერდი</h2>
      <nav style={{marginTop:'50px'}}>
        <Link to="/info">პირადი ინფორმაცია</Link>
        {' | '}
        <Link to="/settings">პარამეტრები</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default ProfilePage;