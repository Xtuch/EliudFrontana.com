// Get the necessary elements
const experienceButton = document.getElementById("experience-button");
const experienceScreen = document.getElementById("experience-screen");
const returnButton = document.getElementById("return-button");

// Function to show the experience screen
experienceButton.addEventListener("click", function() {
    experienceScreen.style.display = "flex"; // Show the experience screen
});

// Function to return to the main screen
returnButton.addEventListener("click", function() {
    experienceScreen.style.display = "none"; // Hide the experience screen
});
