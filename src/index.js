const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.querySelector(".btn").addEventListener("click", getPersonData)
});

function getPersonData() {
  fetch("https://randomuser.me/api/")
  .then( res => res.json())
  .then( res => createAndAppendToDOM(res))
}

function createAndAppendToDOM(jsonObj) {
  let data = jsonObj.results[0]
  document.getElementById("profile_picture").src = data.picture.medium
  document.getElementById("fullname").innerHTML = data.name.first+" "+data.name.last
  document.getElementById("email").innerHTML = data.email
  document.getElementById("street").innerHTML = data.location.street
  document.getElementById("city").innerHTML = data.location.city
  document.getElementById("state").innerHTML = data.location.state
  document.getElementById("postcode").innerHTML = data.location.postcode
  document.getElementById("phone").innerHTML = data.phone
  document.getElementById("cell").innerHTML = data.cell
  document.getElementById("date_of_birth").innerHTML = data.dob.date
  
}
