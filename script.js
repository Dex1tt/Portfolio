const sections = document.querySelectorAll('.about, .skills, .contacts, .projects')

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

const burgerBtn = document.getElementById('burger-btn')
const navLinks = document.querySelector('.nav-links')

burgerBtn.addEventListener('click', function() {
    navLinks.classList.toggle('open')
})

const navLinks2 = document.querySelectorAll('nav a')

const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            navLinks2.forEach(function(link) {
                link.classList.remove('active')
            })
            const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`)
            activeLink.classList.add('active')
        }
    })
}, {
    rootMargin: '-40% 0px -40% 0px'
})

sections.forEach(function(section) {
    sectionObserver.observe(section)
})
const heading = document.querySelector('header h1')
const paragraph = document.querySelector('header p')

const headingText = heading.textContent
const paragraphText = paragraph.textContent

heading.textContent = ''
paragraph.textContent = ''

function typeWriter(element, text, index, callback) {
    if (index < text.length) {
        element.textContent += text[index]
        setTimeout(function() {
            typeWriter(element, text, index + 1, callback)
        }, 40)
    } else if (callback) {
        callback()
    }
}

typeWriter(heading, headingText, 0, function() {
    typeWriter(paragraph, paragraphText, 0)
})
