// Abrir a lightbox de login
document.getElementById('open-gallery').addEventListener('click', (event) => {
    event.preventDefault(); // Impede a navegação padrão do link
    document.getElementById('lightbox-login').classList.add('active');
});

// Fechar a lightbox de login
document.getElementById('close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox-login').classList.remove('active');
});

// Validação do formulário de login
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o reload da página ao enviar o formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simples validação de login
    if (username === 'lais' && password === '539') {
        alert('Login bem-sucedido! A galeria está disponível.');
        document.getElementById('lightbox-login').classList.remove('active');
        document.getElementById('galeria').style.display = 'block'; // Mostra a galeria
    } else {
        alert('Usuário ou senha incorretos. Tente novamente!');
    }
});
