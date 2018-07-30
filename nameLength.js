let name1 = prompt('Name length game: Enter a name!');
let name2 = prompt('Enter another name');
let name3 = prompt('Enter another name');

if(name1.length > name2.length && name1.length > name3.length) {
  console.log(`${name1} is the longer name!`);
} else if (name2.length > name1.length && name2.length > name3.length) {
  console.log(`${name2} is the longer name!`);
} else if (name3.length > name1.length && name3.length > name2.length) {
  console.log(`${name3} is the longer name!`);
} else if (name1.length === name2.length && name1.length === name3.length && name2.length === name3.length){
  console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
} else if (name1.length === name2.length) {
  console.log(`${name1} and ${name2} tie for the longest name.`);
} else if (name1.length === name3.length) {
  console.log(`${name1} and ${name3} tie for the longest name.`);
} else if (name2.length === name3.length) {
  console.log(`${name2} and ${name3} tie for the longest name.`);
}
