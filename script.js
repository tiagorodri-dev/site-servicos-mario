

const form = document.querySelector('.fale-conosco')
const background = document.querySelector('.mascara-form')

function showForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
}

function hideForm() {
    form.style.left = '-350px'    
    background.style.visibility = 'hidden'
}