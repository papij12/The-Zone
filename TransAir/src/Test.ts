// sample data
let cards: [number,string] [] =[
  [412,"Dan"],
  [22,"Bob"]
];

//Tester Move an employee card from the Outside zone to the Unloading/loading zone.

let capacity = 0;

if (capacity < 5)
{
  console.log("test1\n")
  console.log(cards)
  capacity++;
}

// Tester Move a card from the Sorting zone to the Storage Zone

let cap = 0;
const found = cards.find(c => {
  return  c[0] <= 500 && c[0] >= 201;
})

if(capacity < 3 && found ){
  console.log("test2\n")
  console.log(cards);
}