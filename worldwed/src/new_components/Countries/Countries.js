import React, { useEffect, useState } from 'react';
import Countries2 from '../countries_2/Countries2';
import './Countries.css';

const Countries = () => {

    const [countries, setecountries] = useState([]);
    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
        .then(Responsive => Responsive.json())
        .then(data => setecountries(data))

    }, []);
    return (
        
        
        <div className ='countries'>
            {countries.map(country => (
                <Countries2 
                key= {country.name.common}
                country = {country}
                // or 
                // name= {country.name.common} 
                // capital= {country.capital} 
                // image= {country.flags.png}
                />
        ))};
            
        </div>
    );
};

export default Countries;

