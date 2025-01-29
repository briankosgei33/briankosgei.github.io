// Add interactivity here if needed
// Example: Lightbox for gallery images
const images = document.querySelectorAll('.grid img');
images.forEach(image => {
  image.addEventListener('click', () => {
    alert('You clicked on an image!');
  });
});
