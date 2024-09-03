// firstName input
let inputFirst = document.querySelector(".firstNameInput")
let firstLable = document.querySelector(".firstNameLable")
let isSelected = true
inputFirst.addEventListener('click' , function(){
    if(isSelected){
        firstLable.style.display = 'none'
        isSelected = false
    }
})
inputFirst.addEventListener('blur' , function(){
    if(!isSelected){
        firstLable.style.display = 'block'
        isSelected = true
    }
})
//lastName input
let lastNameInput = document.querySelector(".lastNameInput")
let lastNameLable = document.querySelector(".lastNameLable")
let isLastSelected = true
lastNameInput.addEventListener('click' , function(){
    if(isLastSelected){
        lastNameLable.style.display = 'none'
        isLastSelected = false
    }
})
lastNameInput.addEventListener('blur' , function(){
    if(!isLastSelected){
        lastNameLable.style.display = 'block'
        isLastSelected = true
    }
})
//modal error
let modalElem = document.querySelector(".modalErrorInput")
let submitBtn = document.querySelector(".btn")
submitBtn.addEventListener('click' , function(){
    if(inputFirst.value.length < 8 || lastNameInput.value.length < 8){
        modalElem.style.display = 'block'
    }else{
        modalElem.style.display = 'none'
    }
})

