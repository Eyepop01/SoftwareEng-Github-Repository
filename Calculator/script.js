const display =  document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ["%", "*", "/", "+", "-", "C", "="];
let output = "";



// Function to calculate based on button clicked 
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== "") {
        // if output has '%', then replace it with '/100' before evaluating
        output = eval(output.replace("%", "/100"));

    } else if(btnValue === "AC"){
        output = ""; // Clear output if 'AC' is pressed
    } else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1) // Removes the last character from the output
    } else {
        // If output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    
    display.value = output; // Update display with current output
} 

// To Add event listeners to all buttons
buttons.forEach((button) =>{
    // Each button click will call the function calculate() with dataset as arument
    button.addEventListener("click", e => calculate(e.target.dataset.value));
});








// To Add event listeners to all buttons
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;

//         if (value === 'C') {
//             display.textContent = '';
//         } else if (value === '=') {
//             try {
//                 display.textContent = eval(display.textContent);
//             } catch (error) {
//                 display.textContent = 'Error';
//             }
//         } else {
//             display.textContent += value;
//         }
//     });

// });


// To handle keyboard input
// document.addEventListener('keydown', (event) => {
//     const key = event.key;

//     if (key === 'Escape') {
//         display.textContent = '';
//     } else if (key === 'Enter') {
//         try {
//             display.textContent = eval(display.textContent);
//         } catch (error) {
//             display.textContent = 'Error';
//         }
//     } else if ('0123456789+-*/.'.includes(key)) {
//         display.textContent += key;
//     }
// });

