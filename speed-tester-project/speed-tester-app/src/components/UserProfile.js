import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const response = await UserService.getUser(userId); // You would implement this service.
    setUser(response.user);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.username}</h2>
          <p>Best typing speed: {user.bestSpeed} WPM</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
