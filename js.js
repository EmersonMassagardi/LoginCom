document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoLogin").addEventListener("click", validarLogin);
});

function validarLogin() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    document.getElementById("erroUsuario").textContent = "";
    document.getElementById("erroSenha").textContent = "";

    let valido = true;

    if (usuario.trim() === "") {
        document.getElementById("erroUsuario").textContent = "Preencha o usuário.";
        valido = false;
    }

    if (senha.trim() === "") {
        document.getElementById("erroSenha").textContent = "Preencha a senha.";
        valido = false;
    }

    if (valido) {
        alert("Login realizado com sucesso!");
    }
}