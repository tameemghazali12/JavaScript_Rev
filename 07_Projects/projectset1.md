# Projects related To Dom

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```Javascript
console.log('Hello')

const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  })
})
```
## Project 2
```
Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please provide a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please provide a valid weight: ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);

    // Show the result
    result.innerHTML = `Your BMI is: <span>${bmi}</span>`;
    // Select <p> elements based on their IDs
    const underWeightElement = document.querySelector('#u');
    const normalRangeElement = document.querySelector('#n');
    const overWeightElement = document.querySelector('#o');

    // Reset styles for all <p> elements
    underWeightElement.style.color = '';
    normalRangeElement.style.color = '';
    overWeightElement.style.color = '';

    // Apply styles based on BMI value
    if (bmi < 18.6) {
      underWeightElement.style.color = 'red';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      normalRangeElement.style.color = 'green';
    } else {
      overWeightElement.style.color = 'blue';
    }
  }
});

```

## Project 3

```
const clock=document.getElementById('clock')

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)


```
## Project 4
```
// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select important elements from the HTML document
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // User input field
const guessSlot = document.querySelector('.guesses'); // Element to display previous guesses
const remaining = document.querySelector('.lastResult'); // Element to display remaining guesses
const lowOrHi = document.querySelector('.lowOrHi'); // Element to display if guess is too high or too low
const startOver = document.querySelector('.resultParas'); // Container for result paragraphs

// Create a new paragraph element
const p = document.createElement('p');

// Initialize variables to track game state
let prevGuess = []; // Array to store previous guesses
let numGuess = 1; // Variable to count the number of guesses
let playGame = true; // Variable to control if the game is active or not

// Add event listener to the submit button if the game is active
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    const guess = parseInt(userInput.value); // Get the user's guess
    validateGuess(guess); // Validate the user's guess
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
  // Check if the guess is a valid number between 1 and 100
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    // If the guess is valid, add it to the array of previous guesses
    prevGuess.push(guess);
    // Check if the maximum number of guesses has been reached
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame(); // End the game
    } else {
      displayGuess(guess); // Display the guess
      checkGuess(guess); // Check if the guess is correct
    }
  }
}

// Function to check if the guess is correct
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame(); // End the game if the guess is correct
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

// Function to display the guess
function displayGuess(guess) {
  userInput.value = ''; // Clear the input field
  guessSlot.innerHTML += `${guess}, `; // Display the guess
  numGuess++; // Increment the guess counter
  remaining.innerHTML = `${11 - numGuess} `; // Update the remaining guesses
}

// Function to display a message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
  userInput.value = ''; // Clear the input field
  userInput.setAttribute('disabled', ''); // Disable the input field
  p.classList.add('button'); // Add a class to the paragraph element
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // Add HTML content to the paragraph
  startOver.appendChild(p); // Append the paragraph to the container
  playGame = false; // Set playGame to false to indicate the game is over
  newGame(); // Start a new game
}

// Function to start a new game
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // Get the new game button
  // Add event listener to the new game button
  newGameButton.addEventListener('click', function (e) {
    // Reset game state
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```