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

// Interação com os planos (mensal/anual)
document.getElementById('mensal').addEventListener('click', function() {
  // Animação para as imagens
  document.getElementById('basico-preco').innerText = 'A Partir de R$ 49,90/mês';
  document.getElementById('intermediario-preco').innerText = 'A Partir de R$ 149,90/mês';
  document.getElementById('corporativo-preco').innerText = 'A Partir de R$ 499,90/mês';

  this.classList.remove('naoselecionado');
  this.classList.add('selecionado');
  document.getElementById('anual').classList.remove('selecionado');
  document.getElementById('anual').classList.add('naoselecionado');

  // Adicionando animação às imagens
  document.getElementById('basico-img').classList.add('fadeIn');
  document.getElementById('intermediario-img').classList.add('fadeIn');
  document.getElementById('corporativo-img').classList.add('fadeIn');
  document.getElementById('basico-img').classList.remove('fadeOut');
  document.getElementById('intermediario-img').classList.remove('fadeOut');
  document.getElementById('corporativo-img').classList.remove('fadeOut');

  // Ação ao clicar em "Assinar"
  document.getElementById('basicoAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '49,90');
    localStorage.setItem('planoTipo', 'mensal');
    window.location.href = './orcamento.html';
  });

  document.getElementById('intermediarioAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '149,90');
    localStorage.setItem('planoTipo', 'mensal');
    window.location.href = './orcamento.html';
  });

  document.getElementById('corporativoAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '449,90');
    localStorage.setItem('planoTipo', 'mensal');
    window.location.href = './orcamento.html';
  });

  document.getElementById('empresaPublicaAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '444,90');
    localStorage.setItem('planoTipo', 'mensal');
    window.location.href = './orcamento.html';
  });
});

document.getElementById('anual').addEventListener('click', function() {
  // Animação para as imagens
  document.getElementById('basico-preco').innerText = 'A Partir de R$ 499,90/ano';
  document.getElementById('intermediario-preco').innerText = 'A Partir de R$ 1.499,90/ano';
  document.getElementById('corporativo-preco').innerText = 'A Partir de R$ 4.999,90/ano';

  this.classList.remove('naoselecionado');
  this.classList.add('selecionado');
  document.getElementById('mensal').classList.remove('selecionado');
  document.getElementById('mensal').classList.add('naoselecionado');

  // Adicionando animação às imagens
  document.getElementById('basico-img').classList.add('fadeIn');
  document.getElementById('intermediario-img').classList.add('fadeIn');
  document.getElementById('corporativo-img').classList.add('fadeIn');
  document.getElementById('basico-img').classList.remove('fadeOut');
  document.getElementById('intermediario-img').classList.remove('fadeOut');
  document.getElementById('corporativo-img').classList.remove('fadeOut');

  // Ação ao clicar em "Assinar"
  document.getElementById('basicoAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '79,90');
    localStorage.setItem('planoTipo', 'anual');
    window.location.href = './orcamento.html';
  });

  document.getElementById('intermediarioAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '1149,90');
    localStorage.setItem('planoTipo', 'anual');
    window.location.href = './orcamento.html';
  });

  document.getElementById('corporativoAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '4149,90');
    localStorage.setItem('planoTipo', 'anual');
    window.location.href = './orcamento.html';
  });

  document.getElementById('empresaPublicaAssinar').addEventListener('click', function() {
    localStorage.setItem('plano', '6544,90');
    localStorage.setItem('planoTipo', 'anual');
    window.location.href = './orcamento.html';
  });
});

// Função para calcular o orçamento
function calcularOrcamento() {
  let plano = parseFloat(localStorage.getItem('plano') || 0);
  let planoTipo = localStorage.getItem('planoTipo');
  let addons = JSON.parse(localStorage.getItem('addonsSelecionados') || '[]');
  let total = plano;

  // Calcular adicionais
  addons.forEach(function(addon) {
    total += addon.valor;
  });

  // Exibir o valor total no orçamento
  document.getElementById('valor-final').innerText = `Valor Final: R$ ${total.toFixed(2)}`;

  // Mostrar tipo de plano
  if (planoTipo === 'mensal') {
    document.getElementById('plano-tipo').innerText = "Plano Mensal";
  } else {
    document.getElementById('plano-tipo').innerText = "Plano Anual";
  }
}

// Verificar se o orçamento foi solicitado
function verificarOrcamento() {
  let plano = localStorage.getItem('plano');
  if (!plano) {
    document.getElementById('orcamento-mensagem').innerText = 'Você ainda não solicitou um orçamento.';
  } else {
    calcularOrcamento();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  verificarOrcamento();
});

// Função que será chamada para salvar as escolhas e redirecionar para a página de resultados
function salvarEscolhas() {
  const usuariosExtra = parseInt(document.getElementById('usuariosExtra').value) || 0;
  const dadosExtra = parseInt(document.getElementById('dadosExtra').value) || 0;
  
  const addons = document.querySelectorAll('.addon');
  let addonsTotal = 0;
  addons.forEach(addon => {
    if (addon.checked) {
      addonsTotal += parseInt(addon.value);
    }
  });

  // Calculando o valor total
  const valorTotal = (usuariosExtra * 50) + (dadosExtra * 5) + addonsTotal;

  // Salvando as informações no localStorage
  localStorage.setItem('usuariosExtra', usuariosExtra);
  localStorage.setItem('dadosExtra', dadosExtra);
  localStorage.setItem('addonsTotal', addonsTotal);
  localStorage.setItem('valorTotal', valorTotal);

  // Redirecionando para a página de resultados
  window.location.href = 'orcamentoResult.html';
}

// Função para exibir o orçamento na página de resultados
document.addEventListener('DOMContentLoaded', function() {
  const valorTotal = localStorage.getItem('valorTotal');
  const usuariosExtra = localStorage.getItem('usuariosExtra');
  const dadosExtra = localStorage.getItem('dadosExtra');
  const addonsTotal = localStorage.getItem('addonsTotal');

  if (valorTotal) {
    const valorFinal = `Valor total do orçamento: R$ ${valorTotal}`;

    document.getElementById('orcamento-mensagem').innerHTML = `
      <p>Usuários adicionais: ${usuariosExtra} usuário(s) (R$ ${usuariosExtra * 50})</p>
      <p>Armazenamento adicional: ${dadosExtra} GB (R$ ${dadosExtra * 5})</p>
      <p>Adicionais: R$ ${addonsTotal}</p>
    `;
    document.getElementById('valor-final').innerText = valorFinal;
  }
});

// Função que será chamada para salvar as escolhas e redirecionar para a página de resultados
function salvarEscolhas() {
  const usuariosExtra = parseInt(document.getElementById('usuariosExtra').value) || 0;
  const dadosExtra = parseInt(document.getElementById('dadosExtra').value) || 0;
  
  // Obtendo os valores dos checkboxes de addons
  const addons = document.querySelectorAll('.addon');
  let addonsTotal = 0;
  addons.forEach(addon => {
    if (addon.checked) {
      addonsTotal += parseInt(addon.value);
    }
  });

  // Calculando o valor total do orçamento
  const valorTotal = (usuariosExtra * 50) + (dadosExtra * 5) + addonsTotal;

  // Salvando as informações no localStorage
  localStorage.setItem('usuariosExtra', usuariosExtra);
  localStorage.setItem('dadosExtra', dadosExtra);
  localStorage.setItem('addonsTotal', addonsTotal);
  localStorage.setItem('valorTotal', valorTotal);

  // Redirecionando para a página de resultados
  window.location.href = 'orcamentoResult.html';
}

// Função para exibir o orçamento na página de resultados
document.addEventListener('DOMContentLoaded', function() {
  // Recuperando os valores armazenados no localStorage
  const valorTotal = localStorage.getItem('valorTotal');
  const usuariosExtra = localStorage.getItem('usuariosExtra');
  const dadosExtra = localStorage.getItem('dadosExtra');
  const addonsTotal = localStorage.getItem('addonsTotal');

  // Verificando se o valorTotal existe
  if (valorTotal) {
    // Formatação do valor total
    const valorFinal = `Valor total do orçamento: R$ ${valorTotal}`;

    // Exibindo as informações no HTML
    document.getElementById('orcamento-mensagem').innerHTML = `
      <p>Usuários adicionais: ${usuariosExtra} usuário(s) (R$ ${usuariosExtra * 50})</p>
      <p>Armazenamento adicional: ${dadosExtra} GB (R$ ${dadosExtra * 5})</p>
      <p>Adicionais: R$ ${addonsTotal}</p>
    `;
    document.getElementById('valor-final').innerText = valorFinal;
  }
});
