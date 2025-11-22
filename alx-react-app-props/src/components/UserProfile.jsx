import { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default UserProfile;
