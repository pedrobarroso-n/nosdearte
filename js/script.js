addEventListener('click', ()=> { 
    document.getElementsByTagName('a')[0].setAttribute('href', './index.html')  //link para page inicio
    document.getElementsByTagName('a')[1].setAttribute('href', './produtos.html') //link para a page produtos
    document.getElementsByTagName('a')[2].setAttribute('href', './contato.html')  //link para a page contato
})

const banner = document.getElementById('banner') /*tag dos banner*/
function slide_1(){
    banner.setAttribute('src', '../image/slide_1.gif')
    setTimeout(slide_2, 10000)
}
function slide_2(){
    banner.setAttribute('src', '../image/slide_2.gif')
    setTimeout(slide_3, 10000)
}
function slide_3(){
    banner.setAttribute('src', '../image/slide_3.gif')
    setTimeout(slide_1, 10000)
}
    