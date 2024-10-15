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


window.onload = function() {
    window.scrollTo(0, 0);  
};


window.addEventListener("scroll", resizeTaskbarOnScroll);