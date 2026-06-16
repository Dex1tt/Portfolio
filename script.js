const button = document.getElementById('theme-btn')
button.addEventListener('click', function() {
    document.body.classList.toggle('dark')

 if (document.body.classList.contains('dark')) {
    button.textContent = '☀️ Светлая тема'
 }
 else {
    button.textContent = '🌙 Тёмная тема'
 }
 })
const sections = document.querySelectorAll('.about, .skills, .contacts')
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
})
sections.forEach(function(section) {
    observer.observe(section)
})