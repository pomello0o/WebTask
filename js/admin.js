window.onload = () => form.reset();

btnAddNews.addEventListener('click', submitForm);

newsImage.addEventListener('change', previewImage(e));

function submitForm() {
    resetClasses();
    if (newsTitle.value.trim() === '' || newsImage.value.trim() === '' || newsText.value.trim() === '') {
        error.innerText = `You can't submit news  with empty fields!`;
        errorField.classList.add('error-field');
        [newsTitle, newsImage, newsText].forEach(addClasses);
        form.reset();
        e.preventDefault();
    } else {
        success.style.visibility = 'visible';
        form.reset();
        error.innerText = '';
        resetClasses();
        e.preventDefault();
    }
}

function previewImage(e) {
    let image = new Image();
    let src = e.target.files[0];
    image.src = URL.createObjectURL(src);
    image.onload = () => {
        previev.src = image.src;
    }
}

function resetClasses() {
    newsTitle.classList.remove('invalid-input');
    newsTitle.classList.remove('shaky');
    newsImage.classList.remove('invalid-input');
    newsImage.classList.remove('shaky');
    newsText.classList.remove('invalid-input');
    newsText.classList.remove('shaky');
    errorField.classList.remove('error-field');
}

function addClasses(elementID) {
    if (elementID.value.trim() === '') {
        elementID.classList.add('invalid-input');
        elementID.classList.add('shaky');
    }
}