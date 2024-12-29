
// Initialize counter to 0
let counterValueEl = document.getElementById("counterValue");
let clickCount = 0; // Use a variable to store the count (in memory)

// Function to handle click and increment the counter
function onIncrementCount() {
    clickCount++; // Increment counter in memory
    counterValueEl.textContent = clickCount; // Display updated counter value
}
