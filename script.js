let url = "https://api.diffbot.com/v3/product"; 
let token = 'e2d949e1283ff9c25c322abc9c2f47a1';
let fields = "type,pageURL,title,brand,offerPrice,shippingAmount,saveAmount,images"
let productURL = encodeURIComponent('https://www.walmart.com/ip/Latex-Balloons-Assorted-12in-250ct/960905699');
url = `https://api.diffbot.com/v3/product?token=${token}&url=${productURL}&fields=${fields}&discussion=false`; 
console.log(url);
// console.log(url);
getData();
getBalloons();


// //API taken from https://www.diffbot.com/dev/docs/product/
// //called a "product API" that "extracts complete data from any shopping or e-commerce product page"
// // token is e2d949e1283ff9c25c322abc9c2f47a1
function getData(){
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);    
    })
}

function getBalloons(){
    productURL = encodeURIComponent("https://www.target.com/p/balloon-bundle-with-lettering-white/-/A-79780450");
    url = `https://api.diffbot.com/v3/product?token=${token}&url=${productURL}&fields=${fields}&discussion=false`; 
    console.log(url);
    getData()
}

// //called when successful user log in
// function onSignIn(googleUser) {
//     let profile = googleUser.getBasicProfile();

//     console.log('User signed in!');
//     console.log(profile.getName());
//     console.log(profile.getImageUrl());
//     console.log(profile.getEmail());
// }

// //called when "sign out" button clicked
// function onSignOut() {
//     let auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         console.log('User signed out.');
//     });
// }
