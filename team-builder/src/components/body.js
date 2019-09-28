import React from 'react';
import './body.css';
import Carder from './card';


function Body(props) {
    return (
      <div className="Body">
        <Carder team={props.team} setTeam={props.setTeam}>
        </Carder>
      </div>
    );
  }

  export default Body;