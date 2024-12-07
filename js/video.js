document.getElementById("open-gallery").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Verifique se o usuário está logado
    if (isLoggedIn) {
        // Se o login for válido, exibe os vídeos
        document.querySelector("#videos").style.display = "block";
    } else {
        // Caso contrário, exibe o formulário de login
        document.getElementById("lightbox-login").style.display = "flex";
    }
});

// Função que verifica se o usuário está logado
let isLoggedIn = false; // Inicialmente, não está logado

// Simula a realização do login (isso deve ser feito de acordo com seu processo real de login)
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simula o login (no mundo real, você validaria a senha e usuário)
    isLoggedIn = true;
    
    // Fecha o lightbox de login
    document.getElementById("lightbox-login").style.display = "none";
    
    // Exibe a galeria de vídeos
    document.querySelector("#videos").style.display = "block";
});
