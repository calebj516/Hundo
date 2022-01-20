
// get the values from the UI (controller function)
function getValues() {
  // get values from the page
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;

  // parse into Integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
    let numbers = generateNumbers(startValue, endValue);
    // call displayNumbers
    displayNumbers(numbers);
  } else {
    alert("Error! You must enter integers.");
  }

}

// generate numbers from the start value to the end value (logic function)
function generateNumbers(start, end) {

  let numbers = [];

  for(let i = start; i <= end; i++){
    numbers.push(i);
  }

  return numbers;
}

// display the numbers and mark the even numbers bold (display or view function)
function displayNumbers(numbers) {

  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {

    let number = numbers[i];
    numbers[i] % 2 === 0 ? templateRows += `<tr><td><b>${number}</b></td></tr>` : templateRows += `<tr><td>${number}</td></tr>`;
  }

  document.getElementById('results').innerHTML = templateRows;

}