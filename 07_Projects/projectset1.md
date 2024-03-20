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