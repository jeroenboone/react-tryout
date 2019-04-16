import React from 'react';

const Searchfield = ({zoek, zoekFunctie}) => {
    
    const handleChange2 = event => {zoekFunctie(event.target.value)};

    return (
        <div>
            zoek
            {/* <input type="text" value={zoek} onChange={() => {zoekFunctie()}} /> */}
            <input type="text" value={zoek} onChange={handleChange2} />
            <small>{zoek}</small>
        </div>
    )
};

export default Searchfield;
