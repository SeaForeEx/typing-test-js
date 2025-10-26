// Task 3: An array of sample paragraphs
const randomParagraphs = [
    "The morning sun filtered through the kitchen window, casting golden rays across the wooden table. Steam rose from a freshly brewed cup of coffee, its rich aroma filling the quiet space. It was the kind of peaceful moment that made early mornings worthwhile.",
    "Mountains have always held a special place in human imagination. Their towering peaks seem to touch the sky, challenging adventurers and inspiring poets alike. Each summit tells a story of geological time, carved by wind, water, and ice over millions of years.",
    "Technology moves at an incredible pace, transforming how we live and work. What seemed like science fiction just decades ago is now part of our daily routine. Yet with each innovation comes new questions about privacy, connection, and what it means to be human.",
    "The old bookstore on the corner had survived three generations. Its shelves groaned under the weight of countless stories, some forgotten, others beloved. The owner knew every spine, every author, and could recommend the perfect book for any mood.",
    "Ocean waves follow patterns that have repeated for eons. They crash against shores, retreat, and return with rhythmic persistence. Surfers, sailors, and scientists all study these movements, each finding different meaning in the water's endless dance.",
    "Urban gardens are transforming city landscapes. Rooftops and vacant lots become green oases where communities gather. These small patches of nature provide fresh food, cleaner air, and a reminder that growth is possible even in concrete jungles.",
    "Music has the power to transport us instantly to another time and place. A single melody can evoke memories we thought forgotten, emotions we thought buried. It's a universal language that connects people across cultures and generations.",
    "The art of cooking is more than following recipes. It's about understanding how ingredients interact, how heat transforms, and how flavors build upon each other. Every meal is an opportunity to create something that nourishes both body and soul.",
    "Libraries are sanctuaries of knowledge and quiet contemplation. Between their walls, centuries of human thought and creativity wait patiently. They remain free spaces where anyone can explore ideas, dream bigger, and discover new worlds.", 
    "Night falls differently in every season. Summer nights arrive slowly, reluctant to end the day. Winter darkness rushes in early, crisp and cold. Yet each brings its own beauty, its own invitation to rest and reflect."
];

// Task 3, 4, 5, 6, 7, 8: DOM Elements
const randomParagraphElement = document.getElementById("randomParagraph");
const textInputElement = document.getElementById("textInput");
const timerDisplayElement = document.getElementById("timerDisplay");
const speedDisplayElement = document.getElementById("speedDisplay");
const accuracyDisplayElement = document.getElementById("accuracyDisplay");
const startButtonElement = document.getElementById("startButton");
const stopButtonElement = document.getElementById("stopButton");

// Task 3, 5: State Variables
let selectedParagraph = "";
let testRunning = false;
let startTime = null;
let timerInterval = null;

// Task 3: Pick and display a random paragraph
function displayRandomParagraph() {
    const randomIndex = Math.floor(Math.random() * randomParagraphs.length);
    selectedParagraph = randomParagraphs[randomIndex];
    randomParagraphElement.textContent = selectedParagraph;
}

// Task 4: Event Listener: Monitor typing and end test if completed
// textInputElement.addEventListener('input', () => {
//     if (textInputElement.value.trim() === selectedParagraph) {
//         endTest();
//     }
// })

// Function: Start the typing test
function startTest() {
    // Task 8: Clear data on start
    clearData();

    // Task 3: Display the paragraph if test is running
    if (testRunning) return;
    displayRandomParagraph();
  
    testRunning = true;

    // Task 5: Update timer after every second
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}


// Function: Stop the typing test
function endTest() {
    // Task 4: Exit if test is not running; otherwise, stop the test
    if (!testRunning) return;
    console.log("Test stopped!");

    testRunning = false;

    // Task 5: Stop the timer
    clearInterval(timerInterval);

    // Task 6: Calculate and display typing speed
    const speed = calculateSpeed();
    speedDisplayElement.textContent = `Typing speed: ${speed} wpm`;

    // Task 7: Update the accuracy display element
    const accuracy = calculateAccuracy();
    accuracyDisplayElement.textContent = `Typing Accuracy: ${accuracy}`;

}

// Task 5: Function: Update the timer display
function updateTimer() {
    if (!startTime) return;
    const timePassed = Date.now() - startTime;
    timerDisplayElement.textContent = formatTime(timePassed);
}

// Task 5: Utility: Format time in HH:MM:SS
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds / 3600) % 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Task 6: Function: Calculate typing speed (WPM)
function calculateSpeed() {
    const elapsedTime = (Date.now() - startTime);
    const words = textInputElement.value.trim().split(" ");
    const filteredWords = words.filter(Boolean);
    const wordCount = filteredWords.length;
    const minutes = elapsedTime / 60000;
    const typingSpeed = Math.round(wordCount / minutes);
    return typingSpeed;
}

// Task 7: Function: Calculate typing accuracy
function calculateAccuracy() {
    const originalWords = selectedParagraph.split(" ");
    const typedWords = textInputElement.value.trim().split(" ");
    let correctWords = 0;

    originalWords.forEach((word, index) => {
        if (typedWords[index] === word) correctWords++;
    });

    return Math.round((correctWords / originalWords.length) * 100); // percentage
}

// Task 8: Event Listener: Start button
startButtonElement.addEventListener("click", startTest);

// Task 8: Event Listener: Stop button
stopButton.addEventListener("click", () => {
    if (testRunning) {
        endTest();
    } else {
        alert("The test is not running!");
    }
});

// Task 8: Function: Clear data and reset the UI
function clearData() {
    textInputElement.value = '';
    clearInterval(timerInterval);
    speedDisplayElement.textContent = '';
    accuracyDisplayElement.textContent = '';
    displayRandomParagraph();
    startTime = null;
    testRunning = false;
}
