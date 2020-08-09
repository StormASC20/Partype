let url = "https://api.diffbot.com/v3/product"; 
//API taken from https://www.diffbot.com/dev/docs/product/
//called a "product API" that "extracts complete data from any shopping or e-commerce product page"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);    
        // let email = (myJson.results[0].email);
        // console.log(email);
        // displayData(myJson.results[0]);
    })
