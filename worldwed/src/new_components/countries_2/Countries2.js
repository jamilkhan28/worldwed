import React from 'react';

const Countries2 = (props) => {
    const {flags, name,population, capital} = props.country
    return (
        <div>
             <img src= {flags.png} alt= '' />
             <h1>Country Name : {name.common}</h1>
             <h2><b>Population :</b> {population} </h2>
            <p><b>Capital :</b> {capital}</p>
        </div>
    );
};

export default Countries2;