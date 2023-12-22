document.addEventListener('resize', Menu())

function Menu(){
    const nav = document.querySelector('nav')
    const ul = document.querySelector('ul')
    const menu = document.createElement('menu')
    nav.appendChild(menu)
    
    menu.addEventListener('click', ()=> {
        if (ul.style.display != 'flex'){
            menu.style.rotate = '90deg'
            ul.style.display = 'flex'
        } else{
            menu.style.rotate = '0deg'
            ul.style.display = 'none'
            
        }
    })
}

const products = [
    {
        name: 'Bolinhas decorativas de biscuit',
        price: '0, 00',
        image: '../image/bolinhas.jpeg'
    },
    {
        name: 'Bolsa de crochê decorada',
        price: '0, 00',
        image: '../image/bolsa.jpeg'
    },
    {
        name: 'Chaveiro personalizado de biscuit',
        price: '0, 00',
        image: '../image/chaveiro.jpeg'
    },
    {
        name: 'Top de crochê',
        price: '0, 00',
        image: '../image/top.jpeg'
    },
    {
        name: 'Bonequinhas de biscuit',
        price: '0, 00',
        image: '../image/bonequinhas.jpeg'
    },
    {
        name: 'Capa para almofada (Branca)',
        price: '0, 00',
        image: '../image/almofada-1.jpeg'
    },
    {
        name: 'Capa para almofada (Vermelha)',
        price: '0, 00',
        image: '../image/almofada-2.jpeg'
    },
    {
        name: 'Conjunto de tapetes',
        price: '0, 00',
        image: '../image/conjunto_tapetes.jpeg'
    },
    {
        name: 'Boneca de pano',
        price: '0, 00',
        image: '../image/boneca_pano.jpeg'
    },
    {
        name: 'Tapete circular',
        price: '0, 00',
        image: '../image/tapete_circular.jpeg'
    },
    {
        name: 'Tapete retangular',
        price: '0, 00',
        image: '../image/tapete_retangular.jpeg'
    },
    {
        name: 'Suporte p/ vaso de planta',
        price: '0, 00',
        image: '../image/suporte_planta.jpeg'
    }
]

document.onload(createItens())

function createItens(){
    const local = document.getElementById('local')
    let div = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement('h3')
    let price = document.createElement('p')
    let button = document.createElement('button')

    for (let i = 0; i < products.length; i++){
        image.setAttribute('src', products[i].image)
        div.appendChild(image)
        name.innerHTML = products[i].name
        div.appendChild(name)
        price.innerHTML = products[i].price
        div.appendChild(price)
        button.innerHTML = "Realizar compra"
        div.appendChild(button)
        local.appendChild(div)
        // reinicalizando valores das variaveis
        div = document.createElement('div')
        image = document.createElement('img')
        name = document.createElement('h3')
        price = document.createElement('p')
        button = document.createElement('button')
    }
}
