// Store the logged in user value
let loggedInMentee = "";
let loggedInMentor = "";

// Function to set the logged in mentee
export function setLoggedInMentee(mentee) {
  // Store the user value in localStorage
  localStorage.setItem("loggedInMentee", mentee);
}

// Function to get the logged in mentee
export function getLoggedInMentee() {
  // Retrieve the user value from localStorage
  return localStorage.getItem("loggedInMentee");
}

// Function to set the logged in user
export function setLoggedInmentor(mentor) {
  // Store the user value in localStorage
  localStorage.setItem("loggedInMentor", mentor);
}

// Function to get the logged in user
export function getLoggedInmentor() {
  // Retrieve the user value from localStorage
  return localStorage.getItem("loggedInMentor");
}
