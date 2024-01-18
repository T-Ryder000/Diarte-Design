export default function projects(){

let slider = document.querySelector('.sliderProjects')
let sliderItems = document.querySelectorAll('[data-slide="ProjectItem"]')
let BtnPrevious = document.querySelector('#ProjectLeft')
let BtnNext = document.querySelector('#ProjectRight')


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

function getCenterPosition({index}){
  const sliderItem = sliderItems[index]
  const slideWidth = sliderItem.clientWidth
  const windowWidth = document.body.clientWidth
  const margin = (windowWidth - slideWidth) / 2
  const position = margin - (index * slideWidth)
  return position
}
function setVisibleSlide({index, animate}){
  if(index === 0 || index === sliderItems.length - 1){
    index =  state.curentSlideIndex
  }
  const position = getCenterPosition({index})
  state.curentSlideIndex = index
  translateSlide({position})
  slider.style.transition = animate === true ? 'transform .5s' : 'none' /*css*/
}

function next(){
  setVisibleSlide({index:state.curentSlideIndex + 1, animate: true})
}

function previous(){
  setVisibleSlide({index:state.curentSlideIndex - 1, animate: true})
}

const onMouseDown = (event, index)=>{
const sliderItem = event.currentTarget
state.startingPoint = event.clientX
state.curentPoint = event.clientX - state.savedPosition
state.curentSlideIndex = index
sliderItem.addEventListener('mousemove', onMouseMove)
slider.style.transition= 'none' /*css*/
sliderItem.addEventListener('mouseleave', onMouseLeave)
}

const onMouseMove = (event)=>{
state.movement = event.clientX - state.startingPoint
const position = event.clientX - state.curentPoint
translateSlide({position})
}

const onMouseUp = (event)=>{
  const pointsToMove = event.type.includes('touch')? 50 : 150 ///para ajustar com a largura do mobile
  const sliderItem = event.currentTarget
  if(state.movement < -pointsToMove){
    next()
  }else if(state.movement > pointsToMove){
   previous()
  }else{
    setVisibleSlide({index:state.curentSlideIndex, animate: true})
  }

  sliderItem.removeEventListener('mousemove', onMouseMove)
  sliderItem.removeEventListener('mouseleave', onMouseLeave)
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
  console.log('saiu')
}


function onSlideListTransitionEnd(){
  if(state.curentSlideIndex === sliderItems.length - 2){
    setVisibleSlide({index: 2, animate: false})
  }
  else if(state.curentSlideIndex ===  1){
    setVisibleSlide({index: sliderItems.length - 3, animate: false})
  }
}

function onTouchStart(event, index){
  event.clientX = event.touches[0].clientX
  onMouseDown(event, index)
  const sliderItem = event.currentTarget
  sliderItem.addEventListener('touchmove', onTouchMove)
}
function onTouchMove(event){
  event.clientX = event.touches[0].clientX
  onMouseMove(event)
}
function onTouchEnd(event){
 onMouseUp(event)
 const sliderItem = event.currentTarget
 sliderItem.removeEventListener('touchmove', onTouchMove)
}



//local de comando
function setListeners(){

  sliderItems.forEach((sliderItem, index)=>{

    sliderItem.addEventListener('dragstart', function(event){
      event.preventDefault()
    })
  
    sliderItem.addEventListener('mousedown', function(event){
      onMouseDown(event, index)} )
  
    sliderItem.addEventListener('mouseup', onMouseUp)



    sliderItem.addEventListener('touchstart', function(event){
      onTouchStart(event, index)} )
  
    sliderItem.addEventListener('touchend', onTouchEnd)

    let resizeTimeOut///variavel e função para recarregamento ao mexer nas dimensoes da pagina
    window.addEventListener('resize', function(){
      clearTimeout(resizeTimeOut)
      resizeTimeOut = setTimeout(function(){
        setVisibleSlide({index : state.curentSlideIndex, animate: true})
      }, 300)

    })
  
  })
  
  
  BtnPrevious.addEventListener('click', previous)
  BtnNext.addEventListener('click', next)

  slider>addEventListener('transitionend', onSlideListTransitionEnd)
  
}
function initSliders(){
setListeners()
setVisibleSlide({index: 2, animate: true})
}

initSliders()
}