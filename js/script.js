addEventListener('click', ()=> { 
    document.getElementsByTagName('a')[0].setAttribute('href', './index.html')  //link para page inicio
    document.getElementsByTagName('a')[1].setAttribute('href', './produtos.html') //link para a page produtos
    document.getElementsByTagName('a')[2].setAttribute('href', './contato.html')  //link para a page contato
})

if (document.body.clientWidth < 768){ menuMobile() }

function menuMobile(){
    const nav = document.querySelector('nav')
    const ul = document.querySelector('ul')

    const menu = document.createElement('menu')
    menu.style.width = '36px'
    menu.style.height = '36px'
    menu.style.position = 'relative'
    menu.style.top = '-60%'
    menu.style.background = 'url(../image/menu-icon.png)'
    menu.style.backgroundSize = 'cover'
    menu.style.transition = '.4s ease'
    nav.appendChild(menu)

    menu.addEventListener('click', ()=> {
    if (ul.style.zIndex != 2){
        menu.style.rotate = '90deg'
        ul.style.zIndex = 2
    } else{
        menu.style.rotate = '0deg'
        ul.style.zIndex = -1
    }
    })
}
