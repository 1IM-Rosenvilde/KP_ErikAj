// Track the current state of the header: small or large
let isHeaderSmall = false; 

// Function to resize the header based on scroll position
function resizeTaskbarOnScroll() {
    let TopText = document.getElementById("TopText");
    const scrollY = window.scrollY;

    // Shrink the header when scrolling past 70px if not already small
    if (scrollY > 90 && !isHeaderSmall) {
        TopText.style.padding = "10px";
        TopText.style.fontSize = "1em";
        isHeaderSmall = true;  // Mark header as small
        console.log(scrollY);
    } 
    // Restore the original size when scrolling back above 70px if it's small
    if (scrollY < 10 && isHeaderSmall) {
        TopText.style.padding = "20px";
        TopText.style.fontSize = "2em";
        isHeaderSmall = false;  // Mark header as 
        console.log(scrollY);
    }
}

// Initialize AOS and other functions after page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded'); // Reveal body after page load

    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        easing: 'ease',
        once: false,  // Animations replay when scrolling up
        mirror: true  // Animations replay on scroll up
    });

    // Ensure scroll position starts at the top on page load
    window.scrollTo(0, 0);
});

// Add scroll event listener without debounce (simplified)
window.addEventListener("scroll", resizeTaskbarOnScroll);
