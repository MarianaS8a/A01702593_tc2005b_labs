
let password = document.getElementById("password");
let password_2 = document.getElementById("verify_password");


password.onkeyup = () => {
    let password_value = password.value;
    let password2_value = password_2.value;

    let validation = document.getElementById("validator");
    let verification = document.getElementById("verifier");

    const upper_case = /[A-Z]/g;
    const lower_case = /[a-z]/g;
    const numbers = /[0-9]/g;

    validation.innerHTML = "";

    if(!password_value.match(upper_case)){
        validation.innerHTML += "<li> Incluye una mayúscula </li>";
    }

    if(!password_value.match(lower_case)){
        validation.innerHTML += "<li> Incluye una minúscula </li>";
    }

    if(!password_value.match(numbers)){
        validation.innerHTML += "<li> Incluye un número </li>";
    }

    else if(password_value.match(lower_case) && password_value.match(upper_case)){
        validation.innerHTML = "";
    }

    if(password_value != password2_value){
        verification.innerHTML = "Las contraseñas no coinciden"
    }

    else{
        verification.innerHTML = "";
    }
}

password_2.onkeyup = () => {
    let password_value = password.value;
    let password2_value = password_2.value;

    let verification = document.getElementById("verifier");

    if(password_value != password2_value){
        verification.innerHTML = "Las contraseñas no coinciden"
    }

    else{
        verification.innerHTML = "";
    }

}