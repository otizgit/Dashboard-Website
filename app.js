const title = document.querySelector('.title')
const title2 = document.querySelector('.title2')
const header = document.querySelector('header')
const main = document.querySelector('main')
const content = document.querySelectorAll('.content')
const toggle = document.querySelector('.toggle')
const slide = document.querySelector('.slide')
const darkMode = document.querySelector('.mode p')

toggle.addEventListener('click', function(){
    slide.classList.toggle('slide-change')
    header.classList.toggle('header-change')
    darkMode.classList.toggle('mode-p-change')
    title.classList.toggle('bold-change')
    main.classList.toggle('main-change')
    content.forEach(function(divContent){
        divContent.classList.toggle('content-change')
        divContent.classList.toggle('content-hover')
    })
    title2.classList.toggle('bold2-change')
    toggle.classList.toggle('toggle-change')
})