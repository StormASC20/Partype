    let url = "https://api.diffbot.com/v3/product"; 
    let token = 'e2d949e1283ff9c25c322abc9c2f47a1';
    let fields = "type,pageURL,title,brand,offerPrice,shippingAmount,saveAmount,images"
    let productURL = encodeURIComponent('https://www.walmart.com/ip/Latex-Balloons-Assorted-12in-250ct/960905699');
    url = `https://api.diffbot.com/v3/product?token=${token}&url=${productURL}&fields=${fields}&discussion=false`; 
    console.log(url);
    // console.log(url);
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
    getData();
}
function displayBalloons(){
    fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(product) {
                let pic = product.objects[0].images[0].url;
                console.log(pic);
                let div = document.createElement("div");
                let img = document.createElement("img");
                img.src = pic;
                div.appendChild(img);
                document.body.appendChild(div);
            })
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


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }