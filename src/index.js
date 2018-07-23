const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.querySelector('button').addEventListener('click', loadUserData);
});

// Check out the JSON you get from making a GET request to this url (https://randomuser.me/api/). Open up the Github repositiory for this reading and view the provided src/index.html file in the browser. In src/index.js, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.


function loadUserData() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(json => domFillin(json.results[0]))
}

function getS(id){
  return document.getElementById(`${id}`);
}
function domFillin(data){
  getS('fullname').innerText = `${data.name.title} ${data.name.first} ${data.name.last}`;
  getS('profile_picture').src =
  `${data.picture.thumbnail}`;
  getS('email').innerText = data.email;
  getS('street').innerText = data.location.street;
  getS('city').innerText = data.location.city;
  getS('state').innerText = data.location.state;
  getS('postcode').innerText = data.location.postcode;
  getS('phone').innerText = data.phone;
  getS('cell').innerText = data.cell;
  getS('date_of_birth').innerText = data.dob.date;
  
}