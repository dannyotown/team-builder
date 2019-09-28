import React,{useState} from 'react';
import './reset.css';
import './App.css';
import NavBar from './components/navbar';
import Body from './components/body';

function App() {
  const [team, setTeam] = useState([
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
      <Body team={team} setTeam={setTeam}></Body>
    </div>
  );
}

export default App;
