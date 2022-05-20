// We are going to make a search engine to search TITLE of Movies 
// The first result will be got already Max Headroom
// http://www.omdbapi.com/?apikey=86f623ee&t=Max%20Headroom
// My apikey=86f623ee


'use strict'

// get objects from DOM
const para = document.getElementById("paragraph");
const url = document.getElementById("url");
const button = document.getElementById("butt");

// Write a READ methods to read data from an API

// C R U D -> CREATE READ UPDATE DELETE

let read_old = (URL) => {
    console.log(URL);
    fetch(URL)
        .then( response => {
            if (response.status !== 200) {
                console.error(response.status);
                return;
            }
            response.json()
                .then( data => {
                    para.innerHTML = JSON.stringify(data);
                })
        }).catch( err => {
            console.log(err);
        });

}


//AXIOS

let read = URL => {
    axios
        .get(URL)
        .then( response => {
            para.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        })
}



// We needed to send data to be created on a database
// THIS DATABSE ----->  https://reqres.in/api/users
//
// let create = URL => {
//     axios
//         .post(URL, {
//             first_name : "Badger_Number1",
//             email : "Badgers_earlobes@Ocelots_Spleen.com"
//         })
//         .then( response => {
//             para.innerHTML = JSON.stringify(response);
//         }).catch(err =>{
//             console.error(err);
//         })
// }

// when button is clicked send text from input to function
// we could change read to create if we were creating in a database.

button.onclick = () => read(url.value);

/*
	https://catfact.ninja/fact
	https://www.boredapi.com/api/activity
	http://api.open-notify.org/iss-now.json // ISS POSITION
	http://api.open-notify.org/astros.json // No. OF PEOPLE IN SPACE
  https://emojihub.herokuapp.com/api/random // Random emoji
*/





// Needs an API KEY 
// const options = {method: 'GET'};

// fetch('https://www.virustotal.com/vtapi/v2/file/report?allinfo=false', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));