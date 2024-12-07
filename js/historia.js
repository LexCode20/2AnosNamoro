// Abrir lightbox "Nossa História"
const openNossaHistoriaButton = document.getElementById('open-nossa-historia');
const nossaHistoriaLightbox = document.getElementById('nossa-historia-lightbox');
const closeNossaHistoriaButton = document.getElementById('close-nossa-historia');

// Evento para abrir o lightbox
openNossaHistoriaButton.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    nossaHistoriaLightbox.style.display = 'flex';
});

// Evento para fechar o lightbox
closeNossaHistoriaButton.addEventListener('click', () => {
    nossaHistoriaLightbox.style.display = 'none';
});

// Fechar ao clicar fora da área de conteúdo
nossaHistoriaLightbox.addEventListener('click', (e) => {
    if (e.target === nossaHistoriaLightbox) {
        nossaHistoriaLightbox.style.display = 'none';
    }
});
