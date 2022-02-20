/* $('.rev').slick({
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500
}); */

// Variables
const plus = document.querySelector('.todo-add')
const modal = document.querySelector('.modal')
const modalCancel = document.querySelector('.todo-modal-cancel')
const modalAdd = document.querySelector('.todo-modal-add')
const addTask = document.querySelector('.add-task')
const todoItem = document.querySelector('.todo-list-item')
const modalInput = document.querySelector('.todo-modal-text')
const todoList = document.querySelector('.todo-list')
const todoImg = document.querySelector('.todo-image')
const ion = document.querySelector('ion-icon')
const todoBurger = document.querySelector('.todo-burger')
const navbar = document.querySelector('.navbar')
const todoContainer = document.querySelector('.todo-container-main')
const exampleValue = ['пр.почитать книгу', 'пр.создать приложение', 'пр.пойти погулять', 'пр.сделать 10 отжиманий', 'пр.выучить слова на анг']
let r = Math.floor(Math.random() * exampleValue.length)
const settingsModal = document.querySelector('.settings') 
const navbarSettings = document.querySelector('.navbar-settings')
const settingsThemes = document.querySelectorAll('.settings__theme')
const todoHeader = document.querySelector('.todoheader')
const settingsClose = document.querySelector('.settings__close')
const todoModal = document.querySelector('.todo-modal')


// Event Listener

settingsThemes[0].addEventListener('click', () => {
    modal.style.backgroundColor = '#000'
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


settingsClose.addEventListener('click', hideSettingsClose)


plus.addEventListener('click', showModal)
modalCancel.addEventListener('click', closeModal)
addTask.addEventListener('click', showModal)
modalAdd.addEventListener('click', addTaskItem)
todoBurger.addEventListener('click', moveNavbar)
navbarSettings.addEventListener('click', showSettings)



// Functions
function closeModal() {
    modal.classList.add('hide_modal')
}

function showModal() {
    modalInput.placeholder = exampleValue[r]
    modal.classList.remove('hide_modal')
    modal.classList.add('move_modal')
}

function addTaskItem() {
    if (modalInput.value !== ''){
        todoImg.style.display = 'none'
        modal.classList.add('hide_modal')
        let li = document.createElement('li')
        li.classList.add('todo-list-item')
        li.innerHTML = `${modalInput.value} <ion-icon name="trash-outline"></ion-icon>`
        todoList.appendChild(li)
        modalInput.value = ''
    } 
    
}

function moveNavbar() {
    navbar.classList.toggle('navbar_click')
    todoContainer.classList.toggle('move_container')
}

document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyQ') {
        showModal()
    } 
    if(event.code == 'Enter') {
        addTaskItem()
    }
    if(event.code == 'KeyM') {
        moveNavbar()
    }
})

function showSettings() {
    settingsModal.classList.toggle('showSettings')
    if (settingsModal.classList.contains('showSettings')) {
        
    }
}

function hideSettingsClose() {
    settingsModal.classList.remove('showSettings')
}