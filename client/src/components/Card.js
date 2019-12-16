import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <h2>Name: {props.name}</h2>
            <span>♕</span>
            <p>Country: {props.country}</p>
            <p>Searches: {props.searches}</p>
        </div>
    )
};

export default Card;