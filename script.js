function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    lightbox.style.display = 'flex';

    if (element.tagName === 'IMG') {
        lightboxContent.innerHTML = `<img src="${element.src}" alt="Image">`;
    } else if (element.tagName === 'VIDEO') {
        lightboxContent.innerHTML = `<video src="${element.src}" controls autoplay></video>`;
    }
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
