
export default function exemplos() {


  let CartazesExemplos = document.querySelectorAll('[data-exemplo="cartaz"]');
  let telao = document.querySelector('.tela');
  let imgTelao = document.querySelector('.telaImg img');
  let header = document.querySelector('header')
  
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
  
  
  
  let section1 = document.querySelector('.section1')
  let servicos = document.querySelector('.section1 div')
    
  let larguraWindow = window.innerWidth
  
  function deparecerDivServicos(){
      servicos.style.display = larguraWindow < 1024 ? 'none' : 'block';
  }
  
  deparecerDivServicos()
  
  window.addEventListener('resize', function(){
    larguraWindow = window.innerWidth
  
    deparecerDivServicos()
  })
  
  }
  