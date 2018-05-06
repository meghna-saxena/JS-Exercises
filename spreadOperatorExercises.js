//Adding another key:value in object
const obj = {
    name: "bimbo",
    age: 60
};
const newObj = {...obj, "weight": "48"};
console.log(newObj, newObj == obj);

//Spread Operator
// Adding primitive to array
const num = [10, 20, 30];
const updatedArr = [...num, 40]
console.log("Array of primitives", num == updatedArr, updatedArr);

//Adding object inside an array using spread operator
const icecreams = [];
const finalIcecreams = [...icecreams, {"flavor": "vanilla"}]

console.log("object inside an array", icecreams == finalIcecreams, finalIcecreams);


//Adding primitive key-value inside an object using spread operator
const animal = {species: "bakwaas", age: 12};
const animalCompleteData = {...animal, veg: "carrots", nonveg: "rodent-meat"}
console.log(animalCompleteData);

//Adding object inside an object using spread operator
const x = {veg: "carrots", nonveg: "rodent-meat"}
const animWithObj = {...animal, x }
console.log(animWithObj)