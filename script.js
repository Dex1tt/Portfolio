const sections = document.querySelectorAll('.about, .skills, .contacts, .projects, .services')

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
            if (activeLink) {
                activeLink.classList.add('active')
            }
        }
    })
}, {
    rootMargin: '-40% 0px -40% 0px'
})

sections.forEach(function(section) {
    sectionObserver.observe(section)
})

/* ---------- Форма заявки ---------- */
const form = document.querySelector('.contacts-form')
const formMsg = document.querySelector('.form-msg')
const submitBtn = form.querySelector('button[type="submit"]')

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    submitBtn.disabled = true
    submitBtn.textContent = 'Отправляем...'
    formMsg.textContent = ''
    formMsg.className = 'form-msg'

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: new FormData(form)
        })

        if (response.ok) {
            form.reset()
            form.classList.add('sent')
        } else {
            throw new Error('Ошибка отправки')
        }
    } catch (err) {
        formMsg.textContent = 'Не получилось отправить. Напишите нам в Telegram.'
        formMsg.classList.add('err')
    }

    submitBtn.disabled = false
    submitBtn.textContent = 'Отправить заявку'
})

document.querySelector('.success-again').addEventListener('click', function() {
    form.classList.remove('sent')
})