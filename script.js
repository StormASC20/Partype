 <<<<<<< HEAD
// let url = "https://api.diffbot.com/v3/product"; 
// //API taken from https://www.diffbot.com/dev/docs/product/
// //called a "product API" that "extracts complete data from any shopping or e-commerce product page"
// // token is e2d949e1283ff9c25c322abc9c2f47a1
// fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(myJson){
//         displayData(myJson.results[0]);
//         console.log(myJson);    
//     })
=======
let url = "https://api.diffbot.com/v3/product"; 
// //API taken from https://www.diffbot.com/dev/docs/product/
// //called a "product API" that "extracts complete data from any shopping or e-commerce product page"
// // token is e2d949e1283ff9c25c322abc9c2f47a1
fetch(url)
    .then(response => 
        response.json()
        )
    .then(json => 
        console.log(json)
        );
 >>>>>>> d2778623ef74de098547a1889145f407ead4fac2


//called when successful user log in
function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();

    console.log('User signed in!');
    console.log(profile.getName());
    console.log(profile.getImageUrl());
    console.log(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
<<<<<<< HEAD
}
=======
}
>>>>>>> d2778623ef74de098547a1889145f407ead4fac2 */}
