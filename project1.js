// Placeholder for potential interactivity (e.g., lightbox for gallery images).
document.querySelectorAll('.gallery-images img').forEach(img => {
    img.addEventListener('click', () => {
        alert(`You clicked on ${img.alt}`);
    });
});