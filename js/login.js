let emailInput = document.getElementById("email")
let passInput = document.getElementById("password")
let btnLogin = document.getElementById("btnLogin")
let errorMessage = document.getElementById("errorMessage")

const validEmail = "admin@email.com"
const validPass = "12345"

btnLogin.addEventListener("click", function (e) {
    e.preventDefault()
    let email = emailInput.value.trim()
    let pass = passInput.value.trim()

    if(email === validEmail && pass === validPass) {
        alert("Credenciales validas")
        window.location.href = "./pages/menu.html"
    } else {
        errorMessage.textContent = "Email o contraseña incorrectos"
        return
    }
})