document.getElementById("Btn1").addEventListener("click", function() {

    event.preventDefault()

    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if(user.length!== 0 ){
        if( pass.length!== 0){

            window.location.href = "/views/hamburguesa/ham.html";
            
        } else {
            alert("Escribe la contraseña")
        }
    } else {
        alert ("Escriba el nombre de usuario")
    }
    
});
