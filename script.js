// Get the necessary elements
const experienceButton = document.getElementById("experience-button");
const experienceScreen = document.getElementById("experience-screen");
const returnButton = document.getElementById("return-button");

// Experience section buttons and screens
const privateMathTeacherButton = document.querySelector(".experience-button:nth-child(1)");
const privateMathTeacherScreen = document.getElementById("PrivateMathTeacher-screen");
const returnExperienceButtonMathTeacher = document.getElementById("return-experience-button");

const privateProgrammingTutorButton = document.querySelector(".experience-button:nth-child(2)");
const privateProgrammingTutorScreen = document.getElementById("PrivateProgrammingTutor-screen");
const returnExperienceButtonTutor = document.getElementById("return-experience-button-tutor");

const roboticsInstructorButton = document.querySelector(".experience-button:nth-child(3)");
const roboticsInstructorScreen = document.getElementById("RoboticsInstructor-screen");
const returnExperienceButtonRobotics = document.getElementById("return-experience-button-robotics");

const schoolTeacherButton = document.querySelector(".experience-button:nth-child(4)");
const schoolTeacherScreen = document.getElementById("SchoolTeacher-screen");
const returnExperienceButtonSchool = document.getElementById("return-experience-button-school");

// Function to show the experience screen
experienceButton.addEventListener("click", function() {
    document.getElementById("home").style.display = "none";
    experienceScreen.style.display = "flex";
});

// Function to show the Private Math Teacher screen
privateMathTeacherButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    privateMathTeacherScreen.style.display = "flex";
});

// Function to show the Private Programming Tutor screen
privateProgrammingTutorButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    privateProgrammingTutorScreen.style.display = "flex";
});

// Function to show the Robotics Instructor screen
roboticsInstructorButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    roboticsInstructorScreen.style.display = "flex";
});

// Function to show the School Teacher screen
schoolTeacherButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    schoolTeacherScreen.style.display = "flex";
});

// Function to return to the main screen
returnButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    document.getElementById("home").style.display = "flex";
});

// Function to return to the experience screen from Private Math Teacher
returnExperienceButtonMathTeacher.addEventListener("click", function() {
    privateMathTeacherScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});

// Function to return to the experience screen from Private Programming Tutor
returnExperienceButtonTutor.addEventListener("click", function() {
    privateProgrammingTutorScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});

// Function to return to the experience screen from Robotics Instructor
returnExperienceButtonRobotics.addEventListener("click", function() {
    roboticsInstructorScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});

// Function to return to the experience screen from School Teacher
returnExperienceButtonSchool.addEventListener("click", function() {
    schoolTeacherScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});
