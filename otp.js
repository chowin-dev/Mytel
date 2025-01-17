// Get references to elements
const showDialogButton = document.getElementById('showDialogButton');
const dialog = document.getElementById('dialog');
const dialogOverlay = document.getElementById('dialog-overlay');
const closeButton = document.getElementById('closeButton');
const submitButton = document.getElementById('submitButton');
const userInput = document.getElementById('userInput');

// Show dialog when button is clicked
showDialogButton.addEventListener('click', () => {
    dialog.style.display = 'block';
    dialogOverlay.style.display = 'block';
});

// Close dialog when close button is clicked
closeButton.addEventListener('click', () => {
    dialog.style.display = 'none';
    dialogOverlay.style.display = 'none';
});

// Handle submit button click
submitButton.addEventListener('click', () => {
    const inputValue = userInput.value;
    alert(`You entered: ${inputValue}`);
    dialog.style.display = 'none';
    dialogOverlay.style.display = 'none';
});
