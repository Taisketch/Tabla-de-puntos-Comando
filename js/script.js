document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const portfolioGallery = document.getElementById('portfolio-gallery');

    if (uploadForm) {
        uploadForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const workTitleInput = document.getElementById('work-title');
            const workImageInput = document.getElementById('work-image');

            const title = workTitleInput.value;
            const imageFile = workImageInput.files[0];

            if (title && imageFile) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const workElement = document.createElement('div');
                    workElement.classList.add('work-item');

                    const image = document.createElement('img');
                    image.src = e.target.result;
                    image.alt = title;

                    const workTitle = document.createElement('h3');
                    workTitle.textContent = title;

                    workElement.appendChild(image);
                    workElement.appendChild(workTitle);

                    portfolioGallery.appendChild(workElement);

                    // Limpiar el formulario
                    workTitleInput.value = '';
                    workImageInput.value = '';
                };

                reader.readAsDataURL(imageFile);
            }
        });
    }
});
