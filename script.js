let value = 0

let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg')

document.addEventListener('DOMContentLoaded',()=>
{
const border = document.querySelector('#wrapper')

const show = document.querySelector('.green-bg')

const form = document.querySelector('.form-wrapper')


const btn1 = document.querySelector('#btn-1')
btn1.addEventListener('click',()=>
{
if(value % 2 == 0 || border.style.width == '100%')
{
border.style.width = '40%'
btn1.innerText = 'close'
mysound.play()
show.style.marginLeft = '10rem';
form.style.marginRight = '0'
}
else
{
border.style.width = '100%'
btn1.innerText = 'open'
show.style.marginLeft = '-45rem'
form.style.left = '0'
form.style.marginRight= '100rem'
}

value++
value >= 10 ? value = 0 : value = value
})
})
