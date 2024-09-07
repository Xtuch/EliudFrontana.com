// Division elements

// Experience division
const experienceButton = document.getElementById("ToExperienceFromHomeButton");
const experienceScreen = document.getElementById("ExperienceScreen");
const returnButton = document.getElementById("ToHomeFromExperienceButton");

// Experience subdivion elements

//Private Math Teacher Subdivision
const privateMathTeacherButton = document.querySelector(".ExperienceButton:nth-child(1)");
const privateMathTeacherScreen = document.getElementById("PrivateMathTeacherScreen");
const returnExperienceButtonMathTeacher = document.getElementById("ToExperienceFromPrivateMathTeacherButton");

//Private Programming Tutor Subdivision
const privateProgrammingTutorButton = document.querySelector(".ExperienceButton:nth-child(2)");
const privateProgrammingTutorScreen = document.getElementById("PrivateProgrammingTutorScreen");
const returnExperienceButtonTutor = document.getElementById("ToExperienceFromPrivateProgrammingTutorButton");

//Robotics Instructor Subdivision
const roboticsInstructorButton = document.querySelector(".ExperienceButton:nth-child(3)");
const roboticsInstructorScreen = document.getElementById("RoboticsInstructorScreen");
const returnExperienceButtonRobotics = document.getElementById("ToExperienceFromRoboticsInstructorButton");

//School Teacher Tutor Subdivision
const schoolTeacherButton = document.querySelector(".ExperienceButton:nth-child(4)");
const schoolTeacherScreen = document.getElementById("SchoolTeacherScreen");
const returnExperienceButtonSchool = document.getElementById("ToExperienceFromSchoolTeacherButton");

// Function to show the experience screen
experienceButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    experienceScreen.style.display = "flex";
});



// Functions



//Show functions

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

//Return functions

// Function to return to the main screen
returnButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
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
