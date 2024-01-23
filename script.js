import abertura from "./js/abertura.js";
import exemplos from "./js/exemplos.js";
import projects from "./js/projetos.js";
import formulario from "./js/form.js";


abertura()
exemplos()
projects()
formulario()




//estudo


/*minutos 2hr e 8min procurar estudar


let wrapper = document.querySelector('.wrapper')
let slider = document.querySelector('.slider')
let sliderItems = document.querySelectorAll('[data-slide="item"]')
let left = document.querySelector('#apLeft')
let right = document.querySelector('#apRight')


const state ={
 startingPoint: 0,
 savedPosition : 0,
 curentPoint : 0,
 movement : 0,
 curentSlideIndex : 0,
}

function previous(){}
function next(){}


const onMouseDown = (event, index)=>{
const sliderItem = event.currentTarget
state.startingPoint = event.clientX
state.curentPoint = event.clientX - state.savedPosition
state.curentSlideIndex = index
sliderItem.addEventListener('mousemove', onMouseMove)
}
const onMouseMove = (event)=>{
state.movement = event.clientX - state.startingPoint
const position = event.clientX - state.curentPoint
slider.style.transform = 'translateX('+position+'px)'
state.savedPosition = position
}

const onMouseUp = (event)=>{
  const sliderItem = event.currentTarget
  const slideWidth = sliderItem.clientWidth

  if(state.movement < -150){
    const position = (state.curentSlideIndex + 1) * slideWidth
    slider.style.transform = 'translateX('+(-position)+'px)'
    state.savedPosition = -position
  }else if(state.movement > 150){
    const position = (state.curentSlideIndex - 1) * slideWidth
    slider.style.transform = 'translateX('+(-position)+'px)'
    state.savedPosition = -position
  }else{
  const position = (state.curentSlideIndex ) * slideWidth
  slider.style.transform = 'translateX('+(-position)+'px)'
  state.savedPosition = -position
  }

  sliderItem.removeEventListener('mousemove', onMouseMove)
}

const onMouseLeave = (event)=>{

}

sliderItems.forEach((sliderItem, index)=>{

  sliderItem.addEventListener('dragstart', function(event){
    event.preventDefault()
  })

  sliderItem.addEventListener('mousedown', function(event){onMouseDown(event, index)} )
  sliderItem.addEventListener('mouseup', onMouseUp)

})

*/




/************************************************************************************************ */





/*procurar entender

let wrapper = document.querySelector('.wrapper')
let slider = document.querySelector('.slider')
let sliderItem = document.querySelectorAll('[data-slide="item"]')
let left = document.querySelector('#apLeft')
let right = document.querySelector('#apRight')

let startingPoint = 0;
let savedPosition = 0;
let curentPoint = 0;

const onMouseDown = (sliderItem)=>{
let item = sliderItem.currentTarget
startingPoint = sliderItem.clientX
curentPoint = startingPoint - savedPosition
item.addEventListener('mousemove', onMouseMove)
console.log('segurou')
}
const onMouseMove = (sliderItem)=>{
let movement = sliderItem.clientX - startingPoint
let position = sliderItem.clientX - curentPoint
slider.style.transform = 'translateX('+position+'px)'
savedPosition = position
}
const onMouseUp = (sliderItem)=>{
  let item = sliderItem.currentTarget
  item.removeEventListener('mousemove', onMouseMove)
  console.log('soltou')
}
const onMouseLeave = (sliderItem)=>{

}

sliderItem.forEach((sliderItem, index)=>{
  sliderItem.addEventListener('dragstart', function(event){
    event.preventDefault()
  })

  sliderItem.addEventListener('mousedown', onMouseDown)
  sliderItem.addEventListener('mouseup', onMouseUp)
})*/