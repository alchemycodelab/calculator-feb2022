// WIGGLE - we always IMPORT, GET ELEMENT BY ID, LET INITIAL STATE, EVENT LISTENERS
const addInput1El = document.getElementById('add-input-1');
const addInput2El = document.getElementById('add-input-2');
const addResultEl = document.getElementById('add-result');
const addButtonEl = document.getElementById('add-button');

// - when the user clicks the button
addButtonEl.addEventListener('click', () => {
    // THIS CODE DOESNT HAPPEN UNTIL I CLICK
   
    //   - get the first value from the first input
    const firstValue = addInput1El.valueAsNumber;
    //   - get the second value from the second input
    const secondValue = addInput2El.valueAsNumber;
    
    //   - add those values together
    // const sum = Number(firstValue) + Number(secondValue);
    const sum = firstValue + secondValue;
    
    //   - put the sum into the text content of the results div
    addResultEl.textContent = sum;
});
