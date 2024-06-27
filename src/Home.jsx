// import React from 'react'
// import Admin from './Admin'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This page is for every person including users and admins. For Admins click the Admin Button</p>
//       <button onClick={<Admin />}>  Go To Admin</button>
//     </div>
//   )
// }

//export default Home

import React from 'react';
import { useNavigate } from 'react-router-dom';
//import Admin from './Admin';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Admin');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>This page is for every person including users and admins. For Admins, click the Admin Button</p>
      <button onClick={handleNavigation}>Go To Admin</button>
    </div>
  );
};

export default Home;
