import React,{useState} from 'react';
import './reset.css';
import './App.css';
import NavBar from './components/navbar';
import Body from './components/body';

function App() {
  const [member, setMember] = useState([
    {
      name: "Tom Tony",
      email:
        "ttony@yahoo.com",
      role: "Java Developer"
      }
  ]);
  return (
    <div>
      <NavBar></NavBar>
      <Body member={member} setMember={setMember}></Body>
    </div>
  );
}

export default App;
