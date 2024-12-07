// Selecionando elementos para Mensagem Especial
const specialMessageLightbox = document.getElementById('special-message-lightbox');
const closeSpecialMessageButton = document.getElementById('close-special-message');
const openMessageButton = document.getElementById('open-message-button'); // Botão que abre a lightbox

// Selecionando elementos para Nossa História
const historyLightbox = document.getElementById('history-lightbox');
const closeHistoryButton = document.getElementById('close-history-lightbox');
const openHistoryButton = document.querySelector('a[href="#nossa-historia"]'); // Botão que abre a lightbox

// Funções para Mensagem Especial
function openSpecialMessageLightbox() {
    specialMessageLightbox.classList.add('active');
}

function closeSpecialMessageLightbox() {
    specialMessageLightbox.classList.remove('active');
}

// Funções para Nossa História
function openHistoryLightbox() {
    historyLightbox.classList.add('active');
}

function closeHistoryLightbox() {
    historyLightbox.classList.remove('active');
}

// Eventos para Mensagem Especial
openMessageButton.addEventListener('click', openSpecialMessageLightbox);
closeSpecialMessageButton.addEventListener('click', closeSpecialMessageLightbox);

// Eventos para Nossa História
openHistoryButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o scroll padrão do link
    openHistoryLightbox();
});
closeHistoryButton.addEventListener('click', closeHistoryLightbox);
