$(document).ready(function () {
    var password = document.getElementById("user_password");
    var confirm = document.getElementById("confirm_password");
    var btn = document.getElementsByClassName("btn");

    $(btn).click(function() {
        if(password.value === "" || confirm.value === ""){
            return;
        }

        if(password.value === confirm.value){
            password.style.borderColor = "green";
            confirm.style.borderColor = "green";
        }else{
            confirm.style.borderColor = "red";
        }
    });
});

