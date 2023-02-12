let card = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let buttonEle = document.getElementById('cardButton')
let buttonEle2 = document.getElementById('cardButton2')
let buttonEle3 = document.getElementById('cardButton3')
let buttonEle4 = document.getElementById('cardButton4')
let buttonEle5 = document.getElementById('cardButton5')
let buttonEle6 = document.getElementById('cardButton6')
let img = document.getElementById('cardImg')
let img2 = document.getElementById('cardImg2')
let img3 = document.getElementById('cardImg3')
let img4 = document.getElementById('cardImg4')
let img5 = document.getElementById('cardImg5')
let img6 = document.getElementById('cardImg6')


card.addEventListener('mouseover', (event) => {
    buttonEle.textContent =  'Read More'
    img.classList.add('card-image2')

})

card.addEventListener('mouseout', (event) => {
    buttonEle.textContent =  '+'
    img.classList.remove('card-image2')
})


card2.addEventListener('mouseover', (event) => {
    buttonEle2.textContent =  'Read More'
    img2.classList.add('card-image2')

})

card2.addEventListener('mouseout', (event) => {
    buttonEle2.textContent =  '+'
    img2.classList.remove('card-image2')
})

card3.addEventListener('mouseover', (event) => {
    buttonEle3.textContent =  'Read More'
    img3.classList.add('card-image2')

})

card3.addEventListener('mouseout', (event) => {
    buttonEle3.textContent =  '+'
    img3.classList.remove('card-image2')
})

card4.addEventListener('mouseover', (event) => {
    buttonEle4.textContent =  'Read More'
    img4.classList.add('card-image2')

})

card4.addEventListener('mouseout', (event) => {
    buttonEle4.textContent =  '+'
    img4.classList.remove('card-image2')
})

card5.addEventListener('mouseover', (event) => {
    buttonEle5.textContent =  'Read More'
    img5.classList.add('card-image2')

})

card5.addEventListener('mouseout', (event) => {
    buttonEle5.textContent =  '+'
    img5.classList.remove('card-image2')
})

card6.addEventListener('mouseover', (event) => {
    buttonEle6.textContent =  'Read More'
    img6.classList.add('card-image2')

})

card6.addEventListener('mouseout', (event) => {
    buttonEle6.textContent =  '+'
    img6.classList.remove('card-image2')
})