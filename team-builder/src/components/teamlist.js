import React from 'react';
import './teamlist.css';


function TeamList(props) {
    return (
        <div className="teamBox">
            {props.member.map((mem, index) =>
                <div className="box">
                    <p>Name:</p><p>{mem.name}</p>
                    <p>Roll:</p><p>{mem.role}</p>
                    <p>Email:</p><p>{mem.email}</p>
                </div>
            )}
        </div>
    );
}

export default TeamList;