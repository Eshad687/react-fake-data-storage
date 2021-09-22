import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



// import { add } from '../../utilities/storage'
//imported from storage from utilites file
//if it was default export then , 2nd bracket not needed

const Cosmetics = () => {
    /*
     const first = 55;
    const sec = 66;
    const sum = add(first, sec);
    console.log(sum) 
    */

    // lets say we dont have data from api and we will have to create the data here in a object. we convert the data to json from internet and save it to the public folder in a json file

    //now fetching here from public

    const [cosmetics, setCosmetics] = useState([])

    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, [])


    return (
        <div>
            <h3>Shop my cosmetics</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;