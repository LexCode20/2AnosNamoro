const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('image-lightbox');
const zoomedImage = document.getElementById('zoomed-image');
const imageText = document.getElementById('image-text');

images.forEach(image => {
    image.addEventListener('click', () => {
        // Exibe o Lightbox
        lightbox.classList.add('active');

        // Atualiza a imagem do Lightbox
        zoomedImage.src = image.src;

        // Atualiza o texto no Lightbox
        imageText.textContent = image.getAttribute('data-text');
    });
});

// Fechar o Lightbox ao clicar nele
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    zoomedImage.src = '';
    imageText.textContent = '';
});
