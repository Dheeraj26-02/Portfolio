// Select the menu button and sidebar
const menuBtn = document.querySelector(".menuBtn");
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menuBtn img")

// Toggle Sidebar Visibility on Menu Button Click
menuBtn.addEventListener("click", () => {
    // Toggle the "display" property of the sidebar
    sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
    if(sidebar.style.display==="flex"){
        menuIcon.src="./public/cross.png";
    }
    else {
        menuIcon.src = "./public/menu.png";
    }
});






const textElement = document.getElementById('text');
const sentences = [
    "Software Engineer",
    "Video Editor",
    "Web Developer"
];
let sentenceIndex = 0;
let charIndex = 0;

function type() {
    const currentSentence = sentences[sentenceIndex];

    if (charIndex < currentSentence.length) {
        textElement.textContent += currentSentence.charAt(charIndex);
        charIndex++;
        setTimeout(type, 50); // Typing speed
    } else {
        // Sentence complete
        textElement.style.borderRight = "none"; // Hide cursor briefly
        setTimeout(() => {
            textElement.textContent = ""; // Clear the text
            textElement.style.borderRight = ".15em solid #0099ff"; // Restore the cursor
            charIndex = 0; // Reset character index
            sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to the next sentence (looping)
            type(); // Start typing the next sentence
        }, 1500); // Delay before next sentence (1.5 seconds)
    }
}

type();



// Select all sections to observe
const sections = document.querySelectorAll('section');

// Intersection Observer to watch when sections enter the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add "show" class when visible
            observer.unobserve(entry.target);  // Stop observing after animating
        }
        else{
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});







// Smooth Scroll on Navbar Link Click
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.sidebar').style.display = "none"; // Hide sidebar on link click
        menuIcon.src = "./public/menu.png"; // Reset menu icon to menu state
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight, // Adjust scroll to account for fixed navbar
            behavior: 'smooth'
        });

        // Update active class immediately
        document.querySelectorAll('.navbar a').forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});
// Smooth Scroll for Up Button
// Smooth Scroll for Up Button
const upButton = document.querySelector('.btnfoot .scroll-to-top'); // Correct selector

if (upButton) {
    upButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: -2000,
            behavior: 'smooth',
        });
    });
}



// Highlight Active Navbar Link on Scroll
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 10; // Include a small offset to activate early
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


document.querySelectorAll('.slider').forEach((slider) => {
    let slides = slider.querySelector('.slides');
    let index = 0;

    const nextSlide = () => {
        if (index < slides.children.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateSlider();
    };

    const prevSlide = () => {
        if (index > 0) {
            index--;
        } else {
            index = slides.children.length - 1;
        }
        updateSlider();
    };

    const updateSlider = () => {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    };

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds
});



const name1 = document.querySelector("#input-name");
const yname = document.querySelector(".yourname");
const yemail = document.querySelector(".youremail");
const email = document.querySelector("#input-email");
const text = document.querySelector("#input-message");
const ytext = document.querySelector(".yourmessage");

const number = document.querySelector("#input-number");
const ynumber = document.querySelector(".yourphone");

const subject = document.querySelector("#input-subject");
const ysubject = document.querySelector(".yoursubject");



name1.addEventListener("click", () => {
    yname.style.color = "#0099ff";
    yname.style.transform = "scale(1.1)";
    yname.style.transition = ".5s";
})
email.addEventListener("click", () => {
    yemail.style.color = "#0099ff";
    yemail.style.transform = "scale(1.1)";
    yemail.style.transition = ".5s";
})
number.addEventListener("click", () => {
    ynumber.style.color = "#0099ff";
    ynumber.style.transform = "scale(1.1)";
    ynumber.style.transition = ".5s";
})
subject.addEventListener("click", () => {
    ysubject.style.color = "#0099ff";
    ysubject.style.transform = "scale(1.1)";
    ysubject.style.transition = ".5s";
})
text.addEventListener("click", () => {
    ytext.style.color = "#0099ff";
    ytext.style.transform = "scale(1.1)";
    ytext.style.transition = ".5s";
})
