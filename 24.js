const URL = 'https://fakestoreapi.com/products';
const response = document.querySelector( '#response');


document.addEventListener("DOMContentLoaded" ,callAPI);

// then catch 

function callAPI() {
     
     /* fetch (URL)
     .then( resp=> resp.json() )
     .then( function(data){
          console.long(data)
     }); */

     fetch(URL)
     .then( resp => resp.json())
     .then( (data) => showData);
}


// async await 

const showData = (info) => {
   info.forEach(item => {
       const row = document.createElement('tr');
       row.innerHTML = `
           <td>${item.name}</td
           <td>${item.UserName}</td
           <td>${item.email}</td
           <td>${item.Website}</td
       `
    
       response.appendChild(row);
    })
}