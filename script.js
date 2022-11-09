const botonMenu =document.querySelector('.boton')
const navlinks =document.querySelector('.nav-links')

botonMenu.addEventListener('click',()=>{
    navlinks.classList.toggle('mobil')
})
