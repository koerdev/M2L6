// se cambian los selectores de los id para email y password para seleccionarlos con jquery
// let emailInput = document.getElementById("email")
// let passInput = document.getElementById("password")
let btnLogin = document.getElementById("btnLogin")
let errorMessage = document.getElementById("errorMessage")

const validEmail = "admin@email.com"
const validPass = "12345"

// se cambia el event listener para usar jquery
// btnLogin.addEventListener("click", function (e) {
$('#loginForm').submit(function(e) {
    e.preventDefault()
    // ahora se obtienen los valores directamente cuando se hace click en el botón
    let email = $('#email').val().trim()
    let pass = $('#password').val().trim()

    if(email === validEmail && pass === validPass) {
        alert("Credenciales validas")
        window.location.href = "./pages/menu.html"
    } else {
        errorMessage.textContent = "Email o contraseña incorrectos"
        $('#errorMessage').removeClass('d-none')
        return
    }
})