const searchIcon= document.getElementById('searchIcon')
const searchEngine= document.getElementById('searchEngine')
const cafelogo= document.querySelector('.logo')





searchIcon.addEventListener('click',()=>{
    searchEngine.classList.toggle('active')
    cafelogo.classList.toggle('active')

})


