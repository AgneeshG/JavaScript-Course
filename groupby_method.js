// import "core-js/actual/array/group-by";
console.log("--- Group by method ---");
number_list = [1,2,3,4,5,6,7,8]
animals = [
    { name:'dog', type:'domestic' },
    { name:'lion', type:'wild' },
    { name:'deer', type:'wild' },
    { name:'cheetah', type:'wild' },
    { name:'cow', type:'domestic' },
    { name:'cat', type:'domestic' },
];

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  
const result1 = Object.groupBy(inventory, ({ quantity }) => quantity);
for(let key of Object.entries(result1)){
    console.log(key);
}
// const orderAnimals = animals.groupBy(animal => {
//     return animal.type
// });

// const test = inventory.groupBy((row)=>{
//     return row.type;
// })

console.log(result1);
// console.log(test);