//Remember Me function
const rmCheck = document.getElementById("rememberME"),
passInput = document.getElementById("password"), 
emailInput = document.getElementById("email-address");
if(localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    passInput.value= localStorage.password;
    emailInput.value= localStorage.email-address;
} else {
    rmCheck.removeAttribute("checked");
    passInput.value = "";
    emailInput.value = "";
}

function rememberME() {
    if(rmCheck.checked && emailInput.value !=="" && passInput.value !=="") {
        localStorage.email = emailInput.value;
        localStorage.passInput = passInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.email ="";
        localStorage.passInput = "";
        localStorage.checkbox = "";
    }
}





  