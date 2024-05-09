const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
let wrapperRect, noBtnRect;

let canClickNoBtn = false; // Flag to control if the "no" button can be clicked

// Function to update wrapper and noBtnRect
function updateRects() {
    wrapperRect = wrapper.getBoundingClientRect();
    noBtnRect = noBtn.getBoundingClientRect();
}

// Initial update of rects
updateRects();

// Event listener for window resize to update rects
window.addEventListener('resize', updateRects);

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'NO !';
});

noBtn.addEventListener('mouseover', () => {
    if (!canClickNoBtn) {
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
        noBtn.style.position = 'absolute';
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    }
});

noBtn.addEventListener('click', () => {
    if (!canClickNoBtn) {
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
        noBtn.style.position = 'absolute';
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    }
});

noBtn.addEventListener('click', () => {
    if (canClickNoBtn) {
        // Add your logic here for what should happen when the "no" button is clicked
    }
});

// Optional: Add an event listener to reset the position of the "no" button when the mouse leaves the wrapper
wrapper.addEventListener('mouseleave', () => {
    if (!canClickNoBtn) {
        // Reset the position of the "no" button
        noBtn.style.left = '';
        noBtn.style.top = '';
    }
});

// Media query for mobile
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Check if the media query matches initially
if (mediaQuery.matches) {
    // Code to execute for mobile devices
}
