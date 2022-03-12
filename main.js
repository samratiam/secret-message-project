//Performing operations on Array

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Remove last item
secretMessage.pop();
console.log(secretMessage.length)

// Add the words 'to' and 'Program' at end 
secretMessage.push('to', 'Program');
console.log(secretMessage);

//Change 'easily' to 'right'
secretMessage.splice(7, 1, 'right')
console.log(secretMessage);

//Remove the first element
secretMessage.shift();
console.log(secretMessage);

//Remove 'get', 'right', 'the', 'first', 'time' and replace with 'know'
secretMessage.splice(5, 5, 'know');
console.log(secretMessage);

//Convert the array of elements into a single string
console.log(secretMessage);
console.log(secretMessage.join(" "));
