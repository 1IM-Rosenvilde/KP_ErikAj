function resizeTaskbarOnScroll() {
    let TopText = document.getElementById("TopText");

    if (window.scrollY > 60) {
        
        TopText.style.padding = "10px";
        TopText.style.fontSize = "1em";
    } else {
        
        TopText.style.padding = "20px";
        TopText.style.fontSize = "2em";
    }
}


window.addEventListener('load', function() {
    document.body.classList.add('loaded'); // Reveal body after page load
  });
  
  AOS.init({
    duration: 1000,  
    easing: 'ease',  
    once: false,    
    mirror: true   
  });




window.onload = function() {
    setTimeout(() => window.scrollTo(0, 0), 100); 
  };
  
  AOS.init({
    duration: 1000,  
    easing: 'ease',  
    once: false,     
    mirror: true
  });

window.addEventListener("scroll", resizeTaskbarOnScroll);