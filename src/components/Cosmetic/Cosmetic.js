import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic;
    const handlePurchase = (id) => {

        addToDb(id);

    }
    const handleDelete = (id) => {

        deleteFromDb(id);

    }
    return (
        <div>
            <h2>name: {name}</h2>
            <h4>price: {price}</h4>
            <button onClick={() => handlePurchase(id)}>Purchase</button>
            {/* if we send some parameters then we will have to use an anonymous function or else it will be immedietly called */}
            <button onClick={() => handleDelete(id)}>Delete Item</button>
        </div>
    );
};

export default Cosmetic;