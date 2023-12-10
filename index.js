const names = ["Guadalupe", "Ollie", "Aki"];
const events = " for the wonderful surprise gift!";

function writeCards(names) {
  const myMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]},${events}`;
    myMessages.push(message);
    console.log(message);
    debugger;
  }

  return myMessages;
}

const myMessages = writeCards(names);

console.log(myMessages);


function countDown(FirstNumber) {
  for (let i = FirstNumber; i >= 0; i--) {
    console.log(i);
  }
}

countDown(10);
