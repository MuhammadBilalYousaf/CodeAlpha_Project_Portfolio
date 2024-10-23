// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Toggle the nav menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



//main section typing effect
document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Bilal Yousaf", "FullStack Developer", "Graphics Designer", "SEO Expert"];
    let currentRoleIndex = 0;
    const typingText = document.querySelector(".typing-text");
    const typingSpeed = 100; 
    const erasingSpeed = 50; 
    const delayBetweenRoles = 1000; 

    function typeRole(role) {
        let charIndex = 0;
        typingText.textContent = ""; 

        const typeChar = () => {
            if (charIndex < role.length) {
                typingText.textContent += role.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                setTimeout(() => eraseRole(role), delayBetweenRoles);
            }
        };

        typeChar();
    }

    function eraseRole(role) {
        let charIndex = role.length;

        const eraseChar = () => {
            if (charIndex > 0) {
                typingText.textContent = role.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseChar, erasingSpeed);
            } else {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length; 
                typeRole(roles[currentRoleIndex]); 
            }
        };

        eraseChar();
    }

    typeRole(roles[currentRoleIndex]);
});

var modal = document.getElementById("hireMeModal");

var btn = document.getElementById("hire-me-btn");

var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}