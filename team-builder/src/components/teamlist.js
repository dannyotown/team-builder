import React from 'react';
import './teamlist.css';


function TeamList(props) {
    return (
        <div className="teamBox">
            {props.team.map((mem, index) =>
                <div className="box">
                    <p id="teamId">Name</p><p>{mem.name}</p>
                    <p id="teamId">Roll</p><p>{mem.role}</p>
                    <p id="teamId">Email</p><p>{mem.email}</p>
                </div>
            )}
        </div>
    );
}

export default TeamList;