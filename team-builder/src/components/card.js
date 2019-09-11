import React from 'react';
import './card.css';
import Form from './form';
import TeamList from './teamlist';

function Carder(props) {
  return (
    <div className="Card">
      <Form member={props.member} setMember={props.setMember}></Form>
      <TeamList member={props.member}></TeamList>
    </div>
  );
}

export default Carder;