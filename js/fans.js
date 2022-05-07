window.onload = () => form.reset();

let addError = function() { element.classList.add('error'); };
let removeError = function() { element.classList.remove('error'); };

btnSubmit.addEventListener('click', submitForm);

function submitForm() {
    if (writeComment.value.trim() === '') {
        error.innerText = `You can't submit empty comment!`;
        errorField.classList.add('error-field');
        writeComment.classList.add('invalid-input');
        writeComment.classList.add('shaky');
        form.reset();
        e.preventDefault();
    } else {
        let comments = document.getElementsByClassName('comments')[0];
        let date = new Date().toLocaleDateString();
        let text = writeComment.value;
        let author = writeAuthor.value ? writeAuthor.value : "Anonymous";
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<article>
                                  ${text}
                                </article>
                                <hr class="divide">
                                <div class="comment-info">
                                  <p class="comment-date">${date}</p>
                                  <p class="comment-author">${author}</p>
                                </div>`;
        comments.append(commentDiv);
        form.reset();
        error.innerText = '';
        writeComment.classList.remove('invalid-input');
        errorField.classList.remove('error-field');
        writeComment.classList.remove('shaky');
        e.preventDefault();
    }
}