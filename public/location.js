// location.js

// Function to get current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// Function to display position
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);

  // Example: show on page
  const locationDiv = document.getElementById("location");
  if (locationDiv) {
    locationDiv.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
  }
}

// Function to handle errors
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

// Call the function
getLocation();