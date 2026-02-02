let messageIndex = 0;
const messages = ["정말?", "진짜로?", "다시 생각해봐..", "제발!", "나 울 거야ㅠㅠ"];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    location.href = "success.html"; // Yes 누르면 이동할 페이지
}
