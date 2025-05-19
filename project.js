document.getElementById("toggle").addEventListener("click", function(){
    let input = document.getElementById("pass").type ;
    if(input === "password"){
        document.getElementById("pass").type = "text" ;
        document.getElementById("toggle").classList.replace("fa-eye", "fa-eye-slash");
    }
    else{
        document.getElementById("pass").type = "password" ;
        document.getElementById("toggle").classList.replace("fa-eye-slash", "fa-eye");
    }
})