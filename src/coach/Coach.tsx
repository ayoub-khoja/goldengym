import React from 'react';
import './Coach.css';

function Coach() {
    return (
        <div className="coach-container">
            <div className="coach">Nos coaches</div>
            <hr className="line" />
            <img className="coach1" src={`${process.env.PUBLIC_URL}/img/ben.jpg`} alt="dec" />
        </div>
    );
}

export default Coach;
