


function verificarSenha() {

const senhaCorreta = "amem";
    const senhaDigitada = document.getElementById("senha").value;
    const fornulario =  document.getElementById("formulario");

    if ( senhaDigitada === senhaCorreta){
    formulario.style.display = "block";
    window.location.href = "final.html";
        alert ("acesso liberado!");
    } else{
        alert ("senha incorreta!");




}

}