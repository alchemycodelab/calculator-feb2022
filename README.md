## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

<!-- PLANNING IS MORE IMPORTANT THAN CODING -->
1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Setup
- A number input for the first number we want to add
  - Why? We need to know the first number the user wants to add
  - How? We'll get the input by id, then we'll use the `.value` property to get the value
    - `const inputEl1 = document.getElementById('my-input-1)`;
    - `const usersFirstNumber = inputEl1.value`
- A number input for the second number we want to add
  - Why? We need to know the second number the user wants to add
  - How? We'll get the input by id, then we'll use the `.value` property to get the value
      - `const inputEl2 = document.getElementById('my-input-2)`;
      - `const usersSecondNumber = inputEl2.value`
- Button
  - Why? To prompt the calculation: it tells the computer WHEN to work
  - How? `addButton.addEventListener('click', () => { /* whatever do write here, happens when the user clicks */ })`
- Output div
  - Why? This is a place to show the user the answer.
  - How? `resultsEl.textContent = usersFirstNumber + usersSecondNumber`

This HTML Setup becomes a list of DOM elements that you need to `getElementById` on. That means it's also a list of elements that need ids.
## Events - "what happens"
- PSEUDOCODE - a step by step description of "what happens"
- when the user clicks the button
  - get the first value from the first input
  - get the second value from the second input
  - add those values together
  - put the sum into the text content of the results div

