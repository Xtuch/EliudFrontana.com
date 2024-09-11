// Experience division and subdivision elements

// Experience division elements
const toExperienceFromHomeButton = document.getElementById("ToExperienceFromHomeButton");
const experienceScreen = document.getElementById("ExperienceScreen");
const toHomeFromExperienceButton = document.getElementById("ToHomeFromExperienceButton");

//Private Math Teacher subdivision elements
const toPrivateMathTeacherFromExperienceButton = document.querySelector(".RectangleButton:nth-child(1)");
const privateMathTeacherScreen = document.getElementById("PrivateMathTeacherScreen");
const toExperienceFromPrivateMathTeacherButton = document.getElementById("ToExperienceFromPrivateMathTeacherButton");
const privateMathTeacherToResourcesFromScreenButton = document.getElementById("PrivateMathTeacherToResourcesFromScreenButton");
const privateMathTeacherResourcesScreen = document.getElementById("PrivateMathTeacherResourcesScreen");
const privateMathTeacherToScreenFromResourcesButton = document.getElementById("PrivateMathTeacherToScreenFromResourcesButton");

//Private Programming Tutor subdivision elements
const toPrivateProgrammingTutorFromExperienceButton = document.querySelector(".RectangleButton:nth-child(2)");
const privateProgrammingTutorScreen = document.getElementById("PrivateProgrammingTutorScreen");
const toExperienceFromPrivateProgrammingTutorButton = document.getElementById("ToExperienceFromPrivateProgrammingTutorButton");
const privateProgrammingTutorToResourcesFromScreenButton = document.getElementById("PrivateProgrammingTutorToResourcesFromScreenButton");
const privateProgrammingTutorResourcesScreen = document.getElementById("PrivateProgrammingTutorResourcesScreen");
const privateProgrammingTutorToScreenFromResourcesButton = document.getElementById("PrivateProgrammingTutorToScreenFromResourcesButton");

//Robotics Instructor subdivision elements
const toRoboticsInstructorFromExperienceButton = document.querySelector(".RectangleButton:nth-child(3)");
const roboticsInstructorScreen = document.getElementById("RoboticsInstructorScreen");
const toExperienceFromRoboticsInstructorButton = document.getElementById("ToExperienceFromRoboticsInstructorButton");
const roboticsInstructorToResourcesFromScreenButton = document.getElementById("RoboticsInstructorToResourcesFromScreenButton");
const roboticsInstructorResourcesScreen = document.getElementById("RoboticsInstructorResourcesScreen");
const roboticsInstructorToScreenFromResourcesButton = document.getElementById("RoboticsInstructorToScreenFromResourcesButton");

//School Teacher Tutor subdivision elements
const toSchoolTeacherFromExperienceButton = document.querySelector(".RectangleButton:nth-child(4)");
const schoolTeacherScreen = document.getElementById("SchoolTeacherScreen");
const toExperienceFromSchoolTeacherButton = document.getElementById("ToExperienceFromSchoolTeacherButton");
const schoolTeacherToResourcesFromScreenButton = document.getElementById("SchoolTeacherToResourcesFromScreenButton");
const schoolTeacherResourcesScreen = document.getElementById("SchoolTeacherResourcesScreen");
const schoolTeacherToScreenFromResourcesButton = document.getElementById("SchoolTeacherToScreenFromResourcesButton");

// Education division and subdivision elements

// Education division
const toEducationFromHomeButton = document.getElementById("ToEducationFromHomeButton");
const educationScreen = document.getElementById("EducationScreen");
const toHomeFromEducationButton = document.getElementById("ToHomeFromEducationButton");

// Achievements division and subdivision elements

// Achievements division
const toAchievementsFromHomeButton = document.getElementById("ToAchievementsFromHomeButton");
const achievementsScreen = document.getElementById("AchievementsScreen");
const toHomeFromAchievementsButton = document.getElementById("ToHomeFromAchievementsButton");

// Extracurriculars division and subdivision elements

// Extracurriculars division
const toExtracurricularsFromHomeButton = document.getElementById("ToExtracurricularsFromHomeButton");
const extracurricularsScreen = document.getElementById("ExtracurricularsScreen");
const toHomeFromExtracurricularsButton = document.getElementById("ToHomeFromExtracurricularsButton");

// References division and subdivision elements

// References division
const toReferencesFromHomeButton = document.getElementById("ToReferencesFromHomeButton");
const referencesScreen = document.getElementById("ReferencesScreen");
const toHomeFromReferencesButton = document.getElementById("ToHomeFromReferencesButton");

// Personal Information division and subdivision elements

// Personal Information division
const toPersonalInformationFromHomeButton = document.getElementById("ToPersonalInformationFromHomeButton");
const personalInformationScreen = document.getElementById("PersonalInformationScreen");
const toHomeFromPersonalInformationButton = document.getElementById("ToHomeFromPersonalInformationButton");

// Skills division and subdivision elements

// Skills division
const toSkillsFromHomeButton = document.getElementById("ToSkillsFromHomeButton");
const skillsScreen = document.getElementById("SkillsScreen");
const toHomeFromSkillsButton = document.getElementById("ToHomeFromSkillsButton");

// Language division and subdivision elements

// Language division
const toLanguageFromHomeButton = document.getElementById("ToLanguageFromHomeButton");
const languageScreen = document.getElementById("LanguageScreen");
const toHomeFromLanguageButton = document.getElementById("ToHomeFromLanguageButton");



// Functions



//Show functions

//Experience division and subdivision show functions

// Experience division show function
toExperienceFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    experienceScreen.style.display = "flex";
});

// Private Math Teacher subdivision show function
toPrivateMathTeacherFromExperienceButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    privateMathTeacherScreen.style.display = "flex";
});

// Private Math Teacher resources show function
privateMathTeacherToResourcesFromScreenButton.addEventListener("click", function() {
    privateMathTeacherScreen.style.display = "none";
    privateMathTeacherResourcesScreen.style.display = "flex";
});

// Private Programming Tutor subdivision show function
toPrivateProgrammingTutorFromExperienceButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    privateProgrammingTutorScreen.style.display = "flex";
});

// Private Programming Tutor resources show function
privateProgrammingTutorToResourcesFromScreenButton.addEventListener("click", function() {
    privateProgrammingTutorScreen.style.display = "none";
    privateProgrammingTutorResourcesScreen.style.display = "flex";
});

// Robotics Instructor subdivision show function
toRoboticsInstructorFromExperienceButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    roboticsInstructorScreen.style.display = "flex";
});

// Robotics Instructor resources show function
roboticsInstructorToResourcesFromScreenButton.addEventListener("click", function() {
    roboticsInstructorScreen.style.display = "none";
    roboticsInstructorResourcesScreen.style.display = "flex";
});

// School Teacher Tutor subdivision show function
toSchoolTeacherFromExperienceButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    schoolTeacherScreen.style.display = "flex";
});

// School Teacher Teacher resources show function
schoolTeacherToResourcesFromScreenButton.addEventListener("click", function() {
    schoolTeacherScreen.style.display = "none";
    schoolTeacherResourcesScreen.style.display = "flex";
});

//Education division and subdivision show functions

// Education division show function
toEducationFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    educationScreen.style.display = "flex";
});

//Achievements division and subdivision show functions

// Achievements division show function
toAchievementsFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    achievementsScreen.style.display = "flex";
});

//Extracurriculars division and subdivision show functions

// Extracurriculars division show function
toExtracurricularsFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    extracurricularsScreen.style.display = "flex";
});

//References division and subdivision show functions

// References division show function
toReferencesFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    referencesScreen.style.display = "flex";
});

//Personal Information division and subdivision show functions

// Personal Information division show function
toPersonalInformationFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    personalInformationScreen.style.display = "flex";
});

//Skills division and subdivision show functions

// Skills division show function
toSkillsFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    skillsScreen.style.display = "flex";
});

//Language division and subdivision show functions

// Language division show function
toLanguageFromHomeButton.addEventListener("click", function() {
    document.getElementById("HomeScreen").style.display = "none";
    languageScreen.style.display = "flex";
});

//Return functions

//Experience division and subdivision return functions

// Experience division return function
toHomeFromExperienceButton.addEventListener("click", function() {
    experienceScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});

// Private Math Teacher subdivision return function
toExperienceFromPrivateMathTeacherButton.addEventListener("click", function() {
    privateMathTeacherScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});

// Private Math Teacher resources return function
privateMathTeacherToScreenFromResourcesButton.addEventListener("click", function() {
    privateMathTeacherResourcesScreen.style.display = "none";
    privateMathTeacherScreen.style.display = "flex";
});

// Private Programming Tutor subdivision return function
toExperienceFromPrivateProgrammingTutorButton.addEventListener("click", function() {
    privateProgrammingTutorScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});

// Private Programming Tutor resources return function
privateProgrammingTutorToScreenFromResourcesButton.addEventListener("click", function() {
    privateProgrammingTutorResourcesScreen.style.display = "none";
    privateProgrammingTutorScreen.style.display = "flex";
});

// Robotics Instructor subdivision return function
toExperienceFromRoboticsInstructorButton.addEventListener("click", function() {
    roboticsInstructorScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});

// Robotics Instructor resources return function
roboticsInstructorToScreenFromResourcesButton.addEventListener("click", function() {
    roboticsInstructorResourcesScreen.style.display = "none";
    roboticsInstructorScreen.style.display = "flex";
});

// School Teacher Tutor subdivision return function
toExperienceFromSchoolTeacherButton.addEventListener("click", function() {
    schoolTeacherScreen.style.display = "none";
    experienceScreen.style.display = "flex";
});

// School Teacher Teacher resources return function
schoolTeacherToScreenFromResourcesButton.addEventListener("click", function() {
    schoolTeacherResourcesScreen.style.display = "none";
    schoolTeacherScreen.style.display = "flex";
});

//Education division and subdivision return functions

// Education division return function
toHomeFromEducationButton.addEventListener("click", function() {
    educationScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});

//Achievements division and subdivision return functions

// Achievements division return function
toHomeFromAchievementsButton.addEventListener("click", function() {
    achievementsScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});

//Extracurriculars division and subdivision return functions

// Extracurriculars division return function
toHomeFromExtracurricularsButton.addEventListener("click", function() {
    extracurricularsScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});

//References division and subdivision return functions

// References division return function
toHomeFromReferencesButton.addEventListener("click", function() {
    referencesScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});

//Education division and subdivision return functions

// Personal Information division return function
toHomeFromPersonalInformationButton.addEventListener("click", function() {
    personalInformationScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});

//Skills division and subdivision return functions

// Skills division return function
toHomeFromSkillsButton.addEventListener("click", function() {
    skillsScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});

//Language division and subdivision return functions

// Language division return function
toHomeFromLanguageButton.addEventListener("click", function() {
    languageScreen.style.display = "none";
    document.getElementById("HomeScreen").style.display = "flex";
});