//using local storage as database

// saving the data as an object, 

const getDB = () => localStorage.getItem('shopping_cart');
const updateDb = cart => localStorage.setItem('shopping_cart', JSON.stringify(cart));

const addToDb = id => {
    const item = getDB();
    let shopping_cart = {};
    console.log(item)

    // shopping cart does not exists
    if (!item) {

        shopping_cart[id] = 1
        //    its for the first time, setting one item and its value in the shopping_cart object key 

    }
    //shopping cart exists
    else {
        //    getting the shopping cart and convert it to normal object
        shopping_cart = JSON.parse(item)
        // checking if the product id exists in the storage
        if (shopping_cart[id]) {
            // if exists adding 1 and changing the ids value
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }

        else {
            // if product id does not exists, setting it to 1
            shopping_cart[id] = 1;

        }
    }

    //saving the updated object to the local storage
    updateDb(shopping_cart);


}

const removeFromDb = id => {
    const item = getDB();

    if (item) {
        const shopping_cart = JSON.parse(item);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }

}

export { addToDb, removeFromDb as deleteFromDb }

/*
const addToDb = id => {
    const exists = localStorage.getItem(id);
    // checking if the key is already stored
    // exists would be null if not there
    if (!exists) {
        localStorage.setItem(id, 1);
        //set the ids value to be 1
    }
    else {
        const newCount = parseInt(exists) + 1;
        localStorage.setItem(id, newCount);
    }

}
*/