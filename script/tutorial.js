const team = ['Joe','Dyan','Bea', 'Theo'];
// display all elements in the team array
// team.forEach(item=>{
//     console.log(item);
// })
// const cap = (arr)=>{
//     return [...arr].sort();
// }
// console.log(cap(team));

// const removeItem = (arr, item)=>{
//     const index = arr.indexOf(item);
//     return [...item.slice(0, index), ...item.slice(index+1)];
// }
// console.log(removeItem(team, "Dyan"));

// const moreTeam = [...team, "Idam"];
// console.log(moreTeam.sort());
const evenMoreTitles = ['The Conscious Mind', ...team];//behaves like unshift
console.log(evenMoreTitles);

const evenMore = [...team]; //duplicates the team array
console.log(evenMore);
const staff = [
    {name: "Wesley", position: "Musician"},
    {name: "Davis", position: "Engineer"},
];
// const musician = (arr)=>{
//     return arr.filter(member =>member.position === 'Musician');
// }
// console.log(musician(staff));

const game1 = {player: "Jim Jonas", hits:2, runs:1, errors:0}
const game2 = {player: "Jim Jonas", hits:3, runs:0, errors:1}
const total = {};
// console.log(game1.player)
// change an object key into an array using the Object.keys() method
// const stats = Object.keys(game1);
// for(let i = 0; i<stats.length; i++){
//     const stat = stats[i];
//     if(stat !== "player"){
//         total[stat] = game1[stat]+game2[stat];
//     }
// }
// console.log(total);

const cart = ['Naming and Necessity', 'Alice in Wonderland'];
const spreadCart = [...cart];
console.log(spreadCart);