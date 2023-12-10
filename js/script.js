if (document.body.clientWidth < 768){ Menu() }

function Menu(){
    const nav = document.querySelector('nav')
    const ul = document.querySelector('ul')
    const menu = document.createElement('menu')
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
