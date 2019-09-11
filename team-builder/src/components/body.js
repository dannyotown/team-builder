import React from 'react';
import './body.css';
import Carder from './card';


function Body(props) {
    return (
      <div className="Body">
        <Carder member={props.member} setMember={props.setMember}>
        </Carder>
      </div>
    );
  }

  export default Body;