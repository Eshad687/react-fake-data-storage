// utilities used for  do some side works

function add(num1, num2) {
    return (num1 + num2)
}

function sub(num1, num2) {
    return (num1 - num2)
}

// reduce 
const a = [54, 65, 56, 45];
//lets say we want to add all the valus, we can use general for loop or we can use reduce function
const reducer = (previous, current) => previous + current;
const total = a.reduce(reducer, 0) //(initial value 0 because we are summing)

// to find this function from other files we need to export it

export { add, sub }