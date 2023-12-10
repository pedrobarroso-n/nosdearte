window.onload(Menu())

function Menu(){
    const nav = document.querySelector('nav')
    const ul = document.querySelector('ul')

    const menu = document.createElement('menu')
    menu.style.width = '34px'
    menu.style.height = '34px'
    menu.style.position = 'relative'
    menu.style.top = '-60%'
    menu.style.background = 'url(../image/menu-icon.png)'
    menu.style.backgroundSize = 'cover'
    menu.style.transition = '.4s ease'
    nav.appendChild(menu)
    
    menu.addEventListener('click', ()=> {
        if (ul.style.zIndex != 1){
            menu.style.rotate = '90deg'
            ul.style.zIndex = 1
        } else{
            menu.style.rotate = '0deg'
            ul.style.zIndex = -1
        }
    })
}
