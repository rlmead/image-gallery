/* Define constants */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Loop through images */
for (i = 1; i <= 5; i++) {
    let file_path = "images/pic" + i.toString() + ".jpg";
    const newImage = document.createElement('img');
    newImage.setAttribute('src', file_path);
    /* Attach this image to thumb bar */
    thumbBar.appendChild(newImage);
    /* Set onclick function to change main image to this image */
    newImage.onclick = function() {
        displayedImage.setAttribute('src', file_path);
    }
}

/* Wire up the Darken/Lighten button */
btn.onclick = function() {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}