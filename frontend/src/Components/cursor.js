import React from 'react';
import './cursor.css';
const cursor = document.getElementById('cursor');
let mouseX = 0;
let mouseY = 0;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Update cursor position
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // Create ripple effect
    createRipple(mouseX, mouseY);
});

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    document.body.appendChild(ripple);

    // Remove ripple after animation completes
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Optional: Create ripples on click for more pronounced effect
document.addEventListener('click', (e) => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createRipple(e.clientX, e.clientY);
        }, i * 100);
    }
});

// Hide default cursor and show custom cursor on mouse enter
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});