const paragraph = document.querySelector('.panelglowny p:last-of-type');
const textSizeInput = document.getElementById('textSize');
const textFormatSelect = document.getElementById('textFormat');
const redButton = document.querySelector('.btn1');
const greenButton = document.querySelector('.btn2');
const blueButton = document.querySelector('.btn3');

redButton.addEventListener('click', () => {
    paragraph.style.color = 'red';
});

greenButton.addEventListener('click', () => {
    paragraph.style.color = 'green';
});

blueButton.addEventListener('click', () => {
    paragraph.style.color = 'blue';
});

textSizeInput.addEventListener('input', () => {
    const size = textSizeInput.value;
    paragraph.style.fontSize = size ? `${size}%` : '100%';
});

textFormatSelect.addEventListener('change', () => {
    const format = textFormatSelect.value;
    paragraph.style.fontStyle = format === 'kursywa' ? 'italic' : 'normal';
});

 