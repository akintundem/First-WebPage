const open = document.querySelector('#open')
const close = document.querySelector('#close')
const container = document.querySelector('.container')

open.addEventListener('click', ()=> {
    container.classList.add('show-nav')
})
close.addEventListener('click', ()=> {
    container.classList.remove('show-nav')
})





const panels = document.querySelectorAll(".panel")
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}





const  Search  = document.querySelector('.searcher')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click', ()=> {
    Search.classList.toggle('active')
    input.focus()
})