let backToTop = document.getElementById("back-to-top")
window.onscroll=()=>{
    console.log()
    this.scrollY>100? backToTop.style.display = "block" : backToTop.style.display = "none"
}
backToTop.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});