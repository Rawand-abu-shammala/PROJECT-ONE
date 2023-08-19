import React from 'react';
// import { useAuth } from '../hooks/useAuth';
import Slider from '../Slider/Slider';
import { content } from '../../mock/content';

const Profile = () => {
  // const { user } = useAuth();

  // const cardContent = [
  //   'Rawand',
  //   'Rawand',
  //   'Rawand',
    
  // ];

  return (
    <div>
      <h1>Profile</h1>
      {/* {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )} */}


        <div>
          <p>Username:</p>
          <p>Email:</p>
        </div>

      <Slider cards={content} />

      {/* <Slider /> */}


      
    </div>
  );
};

export default Profile;
