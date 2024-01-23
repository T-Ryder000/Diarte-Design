
export default function exemplos() {


  let CartazesExemplos = document.querySelectorAll('[data-exemplo="cartaz"]');
  let telao = document.querySelector('.tela');
  let imgTelao = document.querySelector('.telaImg img');
  let header = document.querySelector('header')
  let esc = document.querySelector('.esc i')

  let section1 = document.querySelector('.section1')
  let servicos = document.querySelector('.section1 div')
  
  window.addEventListener('scroll', function () {
  
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      // header.style.background = '#190242'
      header.style.opacity = '1'
    }, 5);
  });
  
  let timeoutId;
  
  CartazesExemplos.forEach((element, index) => {
    element.addEventListener('mouseenter', () => cartazShow(index));///Pega elementos p/saber quando o mouse está p/cima

    esc.addEventListener('click', CartazHidden)
  });
  
  CartazesExemplos.forEach((element, index)=>{
    element.addEventListener('mouseleave', () => {///Pega os elementos para saber quando o mouse está fora
      timeoutId = setTimeout(CartazHidden, 100);
    });
  })
  
  function cartazShow(index) {///Add a classe que mostra a tela mediante o elemento
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      telao.classList.add('TelaoShow');
      imgTelao.src = `./images/trab${index + 1}.jpg`;
    }, 100 * (index + 1));
  }
  
  telao.addEventListener('mouseenter', () => {////Persiste a tela por meio do mouse em cima dela
    clearTimeout(timeoutId);
    TelaoShow();
  });
  
  telao.addEventListener('mouseleave', () => {///tira a tela por meio do mouse fora dela
    timeoutId = setTimeout(CartazHidden, 100);
  });
   
  function TelaoShow() {
    clearTimeout(timeoutId);
    telao.classList.add('TelaoShow');///Add a classe que mostra a tela mediante a tela
  }
  
  function CartazHidden() {
    telao.classList.remove('TelaoShow');///Ele tira a classe que mostra a tela, mediante a tela e o elemento
  }
  
  

  ///resize
    
  let larguraWindow = window.innerWidth
  
  function deparecerDivServicos(){
      servicos.style.display = larguraWindow < 1024 ? 'none' : 'block';
  }
  
  deparecerDivServicos()
  
  window.addEventListener('resize', function(){
    larguraWindow = window.innerWidth
  
    deparecerDivServicos()
  })
  

  ///////////mobile


  let imgMobile = document.querySelectorAll('.contMobile img')


  let ShowImgMobile = (element)=>{

    element.style.position = 'absolute'
    element.style.width = '81vw'
    element.style.padding = '10vw'
    element.style.boxShadow = '0px 0px 0px black'
    element.style.border = '0'
    element.style.borderRadius = '20px'

    element.addEventListener('click', function(){
      hiddenImgMobile(element)} )
  }

  let hiddenImgMobile=(element)=>{

    if(element.style.width === '81vw'){
      element.style.position = 'static'
      element.style.width = '35%'
      element.style.padding = '0vw'
      element.style.boxShadow = '5px 5px 8px black'
      element.style.border = '2px solid black'
      element.style.borderRadius = '5px'
    }
     else{
      element.style.position = 'absolute'
      element.style.width = '81vw'
      element.style.padding = '10vw'
      element.style.border = '0'
      element.style.boxShadow = '0px 0px 0px black'
      element.style.borderRadius = '20px'
     }
  
  }

if(larguraWindow < 500){

  imgMobile.forEach((element)=>{

    element.addEventListener('click', function(){
       ShowImgMobile(element)})
  })

 }

}


 
  
