const HeaderP2 = document.getElementById('HeaderP2')
HeaderP2.addEventListener('click' , () => {
    HeaderP2.style.color = '#383d42'
})
const HeaderP3 = document.getElementById('HeaderP3')
const HeaderP4 = document.getElementById('HeaderP4')
const ShopMenu = document.getElementById('shopMenu')
HeaderP4.addEventListener('click' , () =>{
    if(ShopMenu.style.display === 'none'){
        ShopMenu.style.display = 'flex'
    }else {
        ShopMenu.style.display = 'none'
    }
})

const Shopbtn1 = document.getElementById('Shopbtn1')
const Shopbtn2 = document.getElementById('Shopbtn2')
const Shopbtn3 = document.getElementById('Shopbtn3')


Shopbtn1.addEventListener('click' , () => {
    Shopbtn1.style.backgroundColor = '#0d6efd'
    Shopbtn2.style.backgroundColor = ''
    Shopbtn3.style.backgroundColor = ''
    ShopMenu.style.display = 'none'
})

Shopbtn2.addEventListener('click', () => {
    Shopbtn2.style.backgroundColor = '#0d6efd'
    Shopbtn1.style.backgroundColor = ''
    Shopbtn3.style.backgroundColor = ''
    ShopMenu.style.display = 'none'
})

Shopbtn3.addEventListener('click' , () => {
    Shopbtn3.style.backgroundColor = '#0d6efd'
    Shopbtn1.style.backgroundColor = ''
    Shopbtn2.style.backgroundColor = ''
    ShopMenu.style.display = 'none'
})