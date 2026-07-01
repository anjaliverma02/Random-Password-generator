const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword(){

    let password = "";

    for(let i=0;i<12;i++){

        let randomIndex = Math.floor(Math.random()*characters.length);

        password += characters[randomIndex];

    }

    document.getElementById("password").value = password;

}

function copyPassword(){

    let pass = document.getElementById("password");

    navigator.clipboard.writeText(pass.value);

    alert("Password Copied!");

}
