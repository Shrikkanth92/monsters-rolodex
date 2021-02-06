import React from 'react';
import './card.styles.css';

export const Card = props => {
    return(
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=185x180`}></img>
            <h2 id={props.key}>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}