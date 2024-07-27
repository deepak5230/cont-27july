import React, { useEffect, useState } from 'react';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          localStorage.setItem('user', JSON.stringify(data));
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userData.firstName} {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      {/* Display other user information as needed */}
    </div>
  );
}

export default Profile;
