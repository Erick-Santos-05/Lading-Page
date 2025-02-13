document.getElementById('mensal').addEventListener('click', function() {

  document.getElementById('basico-preco').innerText = 'A Partir de R$ 49,90/mês';
  document.getElementById('intermediario-preco').innerText = 'A Partir de R$ 149,90/mês';
  document.getElementById('corporativo-preco').innerText = 'A Partir de R$ 499,90/mês';


  this.classList.remove('naoselecionado');
  this.classList.add('selecionado');
  document.getElementById('anual').classList.remove('selecionado');
  document.getElementById('anual').classList.add('naoselecionado');

  document.getElementById('basicoAssinar').addEventListener('click', function() {
    window.location.href ='./orcamento.html';
    localStorage.setItem('plano','49,90');
  })
  
  document.getElementById('intermediarioAssinar').addEventListener('click', function() {
    localStorage.setItem('plano','149,90');
    window.location.href ='./orcamento.html';
  })
  
  document.getElementById('corporativoAssinar').addEventListener('click', function() {
    window.location.href ='./orcamento.html';
    localStorage.setItem('plano','449,90');
  })
  
  document.getElementById('empresaPublicaAssinar').addEventListener('click', function() {
    window.location.href ='./orcamento.html';
    localStorage.setItem('plano','444,90');
  })
});

document.getElementById('anual').addEventListener('click', function() {
  document.getElementById('basico-preco').innerText = 'A Partir de R$ 499,90/ano';
  document.getElementById('intermediario-preco').innerText = 'A Partir de R$ 1.499,90/ano';
  document.getElementById('corporativo-preco').innerText = 'A Partir de R$ 4.999,90/ano';
 
  this.classList.remove('naoselecionado');
  this.classList.add('selecionado');
  document.getElementById('mensal').classList.remove('naoselecionado');
document.getElementById('mensal').classList.add('naoselecionado');

document.getElementById('basicoAssinar').addEventListener('click', function() {
  window.location.href ='./orcamento.html';
  localStorage.setItem('plano','79,90');
})

document.getElementById('intermediarioAssinar').addEventListener('click', function() {
  window.location.href ='./orcamento.html';
  localStorage.setItem('plano','1149,90');
})

document.getElementById('corporativoAssinar').addEventListener('click', function() {
  window.location.href ='./orcamento.html';
  localStorage.setItem('plano','4149,90');
})

document.getElementById('empresaPublicaAssinar').addEventListener('click', function() {
  window.location.href ='./orcamento.html';
  localStorage.setItem('plano','6544,90');
})

});


document.addEventListener('scroll', function() {
  const elementos = document.querySelectorAll('.aparecer-cima, .aparecer-direita, .aparecer-esquerda');

  elementos.forEach(function(elemento) {
    const posicao = elemento.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      if (elemento.classList.contains('aparecer-cima')) {
        elemento.classList.add('apareceu-cima');
      } else if (elemento.classList.contains('aparecer-direita')) {
        elemento.classList.add('apareceu-direita');
      } else if (elemento.classList.contains('aparecer-esquerda')) {
        elemento.classList.add('apareceu-esquerda');
      }
    }
  });
});

const video = document.querySelector('video');
video.playbackRate = 0.5;

