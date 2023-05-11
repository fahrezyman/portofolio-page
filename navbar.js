//DOM : Document Object Manipulation

const menu_trigger = document.querySelector('#menu-trigger')
let show = false
menu_trigger.addEventListener('click',function(){
    const menu = document.querySelector('.menu-list')

    if(show){
        menu.setAttribute('style','display: none')
    }else{
        menu.setAttribute('style','display:block')
    }
})
// Membuat Variabel
const valueA = 10
const valueB = "10"

// Membuat Fungsi
function fungsi(){
    console.log("Fungsi 1")
}
const fungsi2 =() =>{
    console.log("Fungsi 2")
}

