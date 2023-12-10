if (document.body.clientWidth < 768){ Menu() }

function Menu(){
    const nav = document.querySelector('nav')
    const ul = document.querySelector('ul')

    const menu = document.createElement('menu')
    menu.style.width = '36px'
    menu.style.height = '32px'
    menu.style.position = 'relative'
    menu.style.top = '-55%'
    menu.style.backgroundImage = 'url(../image/menu-icon.png)'
    menu.style.backgroundRepeat = 'no-repeat'
    menu.style.backgroundPosition = 'center'
    menu.style.backgroundSize = 'cover'
    menu.style.transition = '.3s ease'
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
