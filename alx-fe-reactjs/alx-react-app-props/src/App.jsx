import { useState } from 'react';
import UserContext from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const [userData] = useState({
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography",
  });

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: "20px" }}>
        <h1>Welcome to My Company</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
