const mainDiv = document.getElementById('main');
const paragraphs = mainDiv.getElementsByTagName('p');


for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].textContent === 'Llamas and Chickens!') {
        paragraphs[i].style.color = 'red';
    }
}