var typed = new Typed(".auto-type", {
    strings: ["naura here"],
    typeSpeed: 150,
    backSpeed: 150,
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('description-in-view');
            return;
        }

    square.classList.remove('description-in-view');
    });
});

// which class to track
observer.observe(document.querySelector('.description'));

var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("ative");

        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.tulisan');
 
		
tombol.addEventListener('click', () => {
menu.classList.toggle('aktif');
});


