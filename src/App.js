import React from 'react';
import Users from './components/Users';

const userData = {
 users :  [
    {
      id : "U1",
      name : "Akash",
      age : 25,
      city : "Chandigarh"
    },

    {
      id : "U2",
      name : "Philip",
      age : 28,
      city : "Mohali"
    },

    {
      id : "U3",
      name : "Robin",
      age : 23,
      city : "Kharar"
    },

    {
      id : "U4",
      name : "Joy",
      age : 6,
      city : "Khuda Lahora"
    }
  ]
}
function App() {
  
  return (
    <div className="App">
      <header>
        <a href="/">iMessage</a>
        <button>Logout</button>
      </header>
      <main>
        <Users userData={userData}/>
      </main>
    </div>
  );
}

export default App;
