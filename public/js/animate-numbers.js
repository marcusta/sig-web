// animate-numbers.js

const MAX_STEPS = 20;

// Function to animate counting up to a target number, then display a string
function animateValue(obj, start, end, duration) {
    let numeric_end = parseInt(end.replace(/[^0-9]/g, ''));
    let current = start;
    let range = numeric_end - start;
    let increment = range > MAX_STEPS ? Math.ceil(range / MAX_STEPS) : 1;
    let steps = Math.min(range, MAX_STEPS);
    let stepTime = duration / steps;
    let count = 0;
    
    let timer = setInterval(function() {
        count++;
        current = Math.min(start + (increment * count), numeric_end);
        obj.innerHTML = current;
        if (count >= steps || current == numeric_end) {
            clearInterval(timer);
            obj.innerHTML = end;  // Display the full string at the end
        }
    }, stepTime);
}

// Function to set up intersection observer
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateValue(
                    entry.target,
                    0,
                    entry.target.getAttribute('data-end'),
                    parseInt(entry.target.getAttribute('data-duration'))
                );
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-number').forEach(el => observer.observe(el));
}

// Fallback function for browsers that don't support IntersectionObserver
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-number');
    elements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            animateValue(
                element,
                0,
                element.getAttribute('data-end'),
                parseInt(element.getAttribute('data-duration'))
            );
            element.classList.add('animated');
        }
    });
}

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        setupIntersectionObserver();
    } else {
        // Fallback to scroll event listener for older browsers
        window.addEventListener('scroll', handleScrollAnimation);
        handleScrollAnimation(); // Check once on load
    }
});


function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 10% of the element is visible
    });

    document.querySelectorAll('.animate').forEach(element => {
        // Check for data-animation attribute
        const animationType = element.dataset.animation;
        if (animationType) {
            element.classList.add(animationType);
        }
        observer.observe(element);
    });
}
document.addEventListener('DOMContentLoaded', animateOnScroll);

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
var deferredCSS = document.getElementById('deferred-css');
if (deferredCSS) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = deferredCSS.href;
    document.head.appendChild(link);
}
});

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.panel').forEach(function(panel) {
            const title = panel.getAttribute('data-title');
            const contentHTML = panel.innerHTML;
            
            panel.innerHTML = `
                <div class="panel-header">
                    <h3 class="panel-title">${title}</h3>
                    <span class="panel-icon arrow_carrot-down"></span>
                </div>
                <div class="panel-content">
                    <div class="panel-content-inner">${contentHTML}</div>
                </div>
            `;

            const header = panel.querySelector('.panel-header');
            const panelContent = panel.querySelector('.panel-content');
            const icon = panel.querySelector('.panel-icon');

            header.addEventListener('click', function() {
                icon.classList.toggle('open');
                
                if (panelContent.style.maxHeight) {
                    panelContent.style.maxHeight = null;
                } else {
                    panelContent.style.maxHeight = panelContent.scrollHeight + "px";
                }
            });
        });
    });