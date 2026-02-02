let messageIndex = 0;
const messages = [
    "Are you sure?",
    "Really sure??",
    "Think again... 🥺",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart ;(",
    "I'm gonna cry...",
    "Just say YES! ❤️"
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Change button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make Yes button grow
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.style.padding = `${parseFloat(window.getComputedStyle(yesButton).padding) * 1.2}px`;
}

function handleYesClick() {
    location.href = "success.html";
}
