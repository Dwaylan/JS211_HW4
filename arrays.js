// What can arrays do?

// an array is a data structure that holds a collection of things.
// you can add or remove anything from an array. Yes, they can be iterated over
//  Splice, push, and pop are all valid for arrays


let friends = ['john', 'james', 'jenny', 'jackie']
// above is an array that holds strings 
// the size of an array is based off of the elements in the array.
// We may index beginning at 0, but the SIZE starts at 1

console.log("friends size =", friends.length)
// This will log the size or amount of friends within the array

let enimies = [];
// there are zero things within the array 

friends[2] = 'Jenny Smith';
// In the array at position "2" I replaced it with Jenny Smith
// Name of array [position] will change the array
