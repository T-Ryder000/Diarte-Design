export default function abertura() {
  'use strict'


//Carrousel de abertura de pagina

let wrapper = document.querySelector('.wrapper')
let slider = document.querySelector('.slider')
let sliderItems = document.querySelectorAll('[data-slide="item"]')
let BtnPrevious = document.querySelector('#apLeft')
let BtnNext = document.querySelector('#apRight')


const state ={
 startingPoint: 0,
 savedPosition : 0,
 curentPoint : 0,
 movement : 0,
 curentSlideIndex : 0,
}

function translateSlide({position}){
  state.savedPosition = position
  slider.style.transform = `translateX(${position}px)`
}
function setVisibleSlide({index}){
  const sliderItem = sliderItems[index]
  const slideWidth = sliderItem.clientWidth
  state.curentSlideIndex = index
  const position = index * slideWidth
  translateSlide({position: -position})
  slider.style.transition= 'transform .5s' /*css*/
}

function next(index){
  if(index == 0){
  setVisibleSlide({index:state.curentSlideIndex + 1})}
  else{
    setVisibleSlide({index:state.curentSlideIndex})
  }
}

function previous(index){
  if(index == 1){
  setVisibleSlide({index:state.curentSlideIndex - 1})}
  else{
    setVisibleSlide({index:state.curentSlideIndex})
  }
}

const onMouseDown = (event, index)=>{
const sliderItem = event.currentTarget
state.startingPoint = event.clientX
state.curentPoint = event.clientX - state.savedPosition
state.curentSlideIndex = index
sliderItem.addEventListener('mousemove', onMouseMove)
slider.style.transition= 'none' /*css*/
}
const onMouseMove = (event)=>{
state.movement = event.clientX - state.startingPoint
const position = event.clientX - state.curentPoint
translateSlide({position: position})
}

const onMouseUp = (event, index)=>{
  const sliderItem = event.currentTarget

  console.log(index)

  if(state.movement < -150){
    next(index)
  }else if(state.movement > 150){
   previous(index)
  }else{
    setVisibleSlide({index:state.curentSlideIndex})
  }

  sliderItem.removeEventListener('mousemove', onMouseMove)
}

const onMouseLeave = (event)=>{
  const sliderItem = event.currentTarget

  if(state.movement < -150){
    next()
  }else if(state.movement > 150){
   previous()
  }else{
    setVisibleSlide({index:state.curentSlideIndex})
  }

  sliderItem.removeEventListener('mousemove', onMouseMove)
}

sliderItems.forEach((sliderItem, index)=>{

  sliderItem.addEventListener('dragstart', function(event){
    event.preventDefault()
  })

  sliderItem.addEventListener('mousedown', function(event){onMouseDown(event, index)} )
  sliderItem.addEventListener('mouseup', function(event){onMouseUp(event, index)} )
  sliderItem.addEventListener('mouseleave', onMouseLeave)

})

function buttonNext(){
  setVisibleSlide({index:state.curentSlideIndex + 1})
}
function buttonPrevious({index}){
  setVisibleSlide({index:state.curentSlideIndex - 1})
}

BtnPrevious.addEventListener('click', buttonPrevious)
BtnNext.addEventListener('click', buttonNext)


}