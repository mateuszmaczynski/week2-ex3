 function fetchh(url, success, error){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function(){
        if(xhr.status == 200){
            success(xhr.responseText);
        }else {
            error(new Error("Wystąpił błąd statusu HTTP: " + xhr.status));
        }
    };
        xhr.send();
    }
(function(){
    var button = document.querySelector('#pobierzDane'),
        dane = document.querySelector('#dane');

       button.addEventListener("click", function(e){
           fetchh("https://jsonplaceholder.typicode.com/users", function(data){
               console.log("Sukces");
               dane.textContent = data;
           },
           function(err){
               console.log(err.message);
           });
       }); 
    
})();