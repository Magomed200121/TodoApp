
// Variables
const navbar = document.querySelector('.navbar')
const todoContainer = document.querySelector('.todo-container-main')
const todoBurger = document.querySelector('.todo-burger')
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const settingsModal = document.querySelector('.settings') 
const navbarSettings = document.querySelector('.navbar-settings')
const settingsThemes = document.querySelectorAll('.settings__theme')
const todoHeader = document.querySelector('.todoheader')
const settingsClose = document.querySelector('.settings__close')



// Event Listenet
settingsClose.addEventListener('click', hideSettingsClose)

settingsThemes[0].addEventListener('click', () => {
    todoHeader.classList.add('theme_black')
    navbar.classList.add('theme_black')
    document.body.style.backgroundColor = '#161616'
    document.body.style.color = '#fff'
    settingsModal.classList.add('theme_black')
    settingsModal.style.boxShadow = '2px 6px 30px 1px #000;'
})

settingsThemes[1].addEventListener('click', () => {
    todoHeader.classList.remove('theme_black')
    navbar.classList.remove('theme_black')
    document.body.style.backgroundColor = ''
    document.body.style.color = ''
    settingsModal.classList.remove('theme_black')
})

navbarSettings.addEventListener('click', showSettings)
todoBurger.addEventListener('click', moveNavbar)

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)
for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', drop)
}


function dragOver(event){
    event.preventDefault()
}

function dragEnter(event){
    event.target.classList.add('hovered')
}

function dragLeave(event){
    event.target.classList.remove('hovered')
}

function drop(event){
    event.target.append(item)
    for(const i of placeholders){
        i.classList.remove('hovered')
    }
}

function dragStart(event){
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragEnd(event){
    event.target.classList.remove('hold', 'hide')
}

// Functions
function moveNavbar() {
    navbar.classList.toggle('navbar_click')
    todoContainer.classList.toggle('move_container')
}

document.addEventListener('keydown', (event) =>{
    if(event.code == 'KeyM') {
        moveNavbar()
    }
    if(event.code == 'KeyS') {
        showSettings()
    }
})

function showSettings() {
    settingsModal.classList.toggle('showSettings')
}

function hideSettingsClose() {
    settingsModal.classList.remove('showSettings')
}