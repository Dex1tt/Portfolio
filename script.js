const sections = document.querySelectorAll('section');
sections.forEach(function(section) {
    section.classList.add('hidden-section');
});
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    })
}, { threshold: 0.1 });
sections.forEach(function(section){
    observer.observe(section);
});
const btnBurger = document.getElementById('burger')
const navLinks = document.getElementById('nav-links')
btnBurger.addEventListener('click', function(){
    navLinks.classList.toggle('open')
})
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(){
        navLinks.classList.remove('open')
    })
})
const navObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active')
            })
            const id = entry.target.id
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`)
            if (activeLink) activeLink.classList.add('active')
        }
    })
})
sections.forEach(section => navObserver.observe(section))
const buyBtn = document.querySelectorAll('.btn-buy')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('btn-close')
buyBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        modal.classList.add('open')
    })
})
closeBtn.addEventListener("click", function(){
    modal.classList.remove('open')
})
modal.addEventListener('click', function(){
      if (event.target === modal) {
        modal.classList.remove('open')
    }
})
const inputs = document.querySelectorAll('.modal-content input')
inputs[0].addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        inputs[1].focus()
    }
})