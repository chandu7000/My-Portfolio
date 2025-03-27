// Typing Effect for Hero Section
const dynamicRole = document.getElementById('dynamic-role');
const roles = ['Web Developer', 'UI Designer', 'Creative Coder'];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    dynamicRole.textContent += roles[roleIndex].charAt(charIndex);
    dynamicRole.style.color = "purple";
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1000);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    dynamicRole.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

// Scroll Reveal Animation
const sections = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
});


// Animate progress bars on scroll
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0'; // Start animation from 0
      setTimeout(() => {
        bar.style.width = width; // Animate to the correct percentage
      }, 100);
    });
  }
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate form submission (real submission would involve backend)
  alert('Thank you for reaching out! I will get back to you shortly.');
  form.reset();
});


// Smooth scrolling for anchor links
$(document).ready(function () {
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    $("html, body").animate({
      scrollTop: $target.offset().top
    }, 800, function () {
      window.location.hash = target;
    });
  });
});


// Skills Data
const skillsData = [
  {
    category: "Technical Skills",
    skills: [
      { name: "HTML5", percentage: 80, color: "bg-primary" },
      { name: "CSS3", percentage: 70, color: "bg-secondary" },
      { name: "JavaScript", percentage: 60, color: "bg-info" },
      { name: "MySQL", percentage: 70, color: "bg-warning" },
    ],
  },
  {
    category: "Frameworks, Programming Languages & Dev Tools",
    skills: [
      { name: "React Js", percentage: 70, color: "bg-primary" },
      { name: "Node Js", percentage: 70, color: "bg-secondary" },
      { name: "Python", percentage: 80, color: "bg-info" },
      { name: "Java", percentage: 60, color: "bg-success" },
    ],
  },
];

// Render Skills
function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");

  skillsData.forEach((category) => {
    // Create Column for Each Category
    const col = document.createElement("div");
    col.classList.add("col-md-6");

    // Add Category Title
    const title = document.createElement("h5");
    title.classList.add("mb-3");
    title.textContent = category.category;
    col.appendChild(title);

    // Add Skills
    category.skills.forEach((skill) => {
      // Skill Name
      const skillName = document.createElement("p");
      skillName.textContent = skill.name;

      // Progress Bar
      const progress = document.createElement("div");
      progress.classList.add("progress", "mb-3");

      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar", skill.color);
      progressBar.style.width = "0%"; // Initial width for animation
      progressBar.setAttribute("data-percentage", skill.percentage); // Store percentage
      progressBar.textContent = `${skill.percentage}%`;

      progress.appendChild(progressBar);
      col.appendChild(skillName);
      col.appendChild(progress);
    });

    // Append Column to Container
    skillsContainer.appendChild(col);
  });
}

// Animate Skills Progress Bars
function animateSkills() {
  const progressBars = document.querySelectorAll("#skills .progress-bar");
  progressBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    bar.style.width = `${percentage}%`;
  });
}

// Trigger Animation on Scroll
function onScroll() {
  const skillsSection = document.getElementById("skills");
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    animateSkills();
    window.removeEventListener("scroll", onScroll); // Trigger only once
  }
}

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  window.addEventListener("scroll", onScroll);
});

