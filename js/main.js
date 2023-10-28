var buttons = document.querySelectorAll('.button');
var leftButton = buttons[0];
var middleButton = buttons[1];
var rightButton = buttons[2];
var leftColumn = document.querySelector('.left-column');
var rightColumn = document.querySelector('.right-column');
var leftImage = leftColumn.querySelector('img');
var rightImage = rightColumn.querySelector('img');

leftButton.addEventListener('click', function() {
    leftColumn.style.width = '100px';
    leftImage.style.width = '0';
    rightColumn.style.width = '';
    rightImage.style.width = '';
});

rightButton.addEventListener('click', function() {
    rightColumn.style.width = '100px';
    rightImage.style.width = '0';
    leftColumn.style.width = '';
    leftImage.style.width = '';
});

middleButton.addEventListener('click', function() {
    leftColumn.style.width = '';
    rightColumn.style.width = '';
    leftImage.style.width = '';
    rightImage.style.width = '';
});
