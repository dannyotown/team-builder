import React from 'react';
import './card.css';
import Form from './form';
import TeamList from './teamlist';

function Carder(props) {
  return (
    <div className="Card">
      <Form team={props.team} setTeam={props.setTeam}></Form>
      <TeamList team={props.team}></TeamList>
    </div>
  );
}

export default Carder;