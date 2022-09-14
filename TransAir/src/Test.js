// sample data
var cards = [
    [412, "Dan"],
    [22, "Bob"]
];
//Tester Move an employee card from the Outside zone to the Unloading/loading zone.
var capacity = 0;
if (capacity < 5) {
    console.log("test1\n");
    console.log(cards);
    capacity++;
}
// Tester Move a card from the Sorting zone to the Storage Zone
var cap = 0;
var found = cards.find(function (c) {
    return c[0] <= 500 && c[0] >= 201;
});
if (capacity < 3 && found) {
    console.log("test2\n");
    console.log(cards);
}
