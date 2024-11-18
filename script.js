
// script.js
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    

    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
  }

// Get the container element
  const container = document.querySelector('.background-animation');

   //Generate circles
   function createShapes(numShapes) {
    for (let i = 0; i < numShapes; i++) {
      // Randomly decide whether to create a circle or a star
    const isStar = Math.random() > 0.5;
    const shape = document.createElement('div');
    shape.classList.add('circle');
    console.log(isStar ? "Star Created" : "Circle created");  // This should appear in the console if the code is working

      //Random size and position
      const size = Math.random() * 50 + 10 + 'px';
      shape.style.width = size;
      shape.style.height = size;
      shape.style.top = Math.random() * 100 + 'vh';
      shape.style.left = Math.random() * 100 + 'vw';

      //Random animation delay for variety
      shape.style.animationDelay = Math.random() * 10 + 's';
      container.appendChild(shape);
    }
  }
  //Call the function to create circles
  createShapes(30);
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Greet Button Functionality
  document.getElementById('greetButton').onclick = function() {
    // Get the value from the input field
    var name = document.getElementById('nameInput').value;

     // Check if the input field is empty
     if (name.trim() === "") {
      alert("Please enter your name.");
      return;
  }

    // Create a greeting message
    var greetingMessage = "Welcome to JavaScript " + name + "!";

    // Update the greeting div with the message
    document.getElementById('greeting').innerText = greetingMessage ;
  };

  // script.js

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "JavaScript is the language of the web. – Unknown",
  "The best way to predict the future is to invent it. – Alan Kay",
  "In programming, clarity is more important than cleverness. – Unknown",
  "A journey of a thousand miles begins with a single step. – Lao Tzu",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "It’s not a bug – it’s an undocumented feature! – Anonymous"
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display the quote
function displayQuote() {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = getRandomQuote();
}

// Add event listener for button click
document.getElementById('getQuoteBtn').addEventListener('click', displayQuote);

// Display a random quote on page load
window.onload = displayQuote;

// Set the date of the event
const eventDate = new Date('2024-12-31T23:59:59').getTime(); // Replace with your event date

// Update the countdown every second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements
    document.getElementById("days").innerText = days + "d";
    document.getElementById("hours").innerText = hours + "h";
    document.getElementById("minutes").innerText = minutes + "m";
    document.getElementById("seconds").innerText = seconds + "s";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("event-title").innerText = "The event has started!";
        document.getElementById("timer").innerText = "";
    }
}, 1000);
