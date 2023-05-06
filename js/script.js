const firstContainer = document.getElementById('first-container');
const secondContainer = document.getElementById('second-container');
const rate = document.querySelectorAll('.rating');
starSpan = document.querySelector('.star-count')
const submitBtn = document.querySelector('#submitbtn');
let numerStar;
submitBtn.disabled = true;

function addSelected(noteSelected, index) {
    noteSelected.classList.add('selected');
    numerStar = index + 1;
    starSpan.textContent = numerStar.toString();
    submitBtn.disabled = false;
}

function removeSelected() {
    rate.forEach(noteSelected => noteSelected.classList.remove('selected'));
}

rate.forEach((noteSelected, index) => noteSelected.addEventListener('click', () => {
    removeSelected();
    addSelected(noteSelected, index);
}))

submitBtn.addEventListener('click', () => {
    firstContainer.classList.toggle('switch')
    secondContainer.classList.toggle('switch')
})

