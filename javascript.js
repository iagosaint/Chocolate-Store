const contagemElement = document.getElementById('contagem');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');




minusButton.addEventListener('click', () => {

  let currentCount = parseInt(contagemElement.textContent);

  if (currentCount > 0) {
    currentCount--;
    contagemElement.textContent = currentCount;
  }
});


plusButton.addEventListener('click', () => {
  let currentCount = parseInt(contagemElement.textContent);
  currentCount++;
  contagemElement.textContent = currentCount;
});


function mostrarAlerta() {
  alert("Produto foi adicionado ao carrinho");
}

function mostrarAlerta_() {
  alert("Seu E-mail foi cadastrado com sucesso!");
}

function mostrarAlerta2() {
  alert("Você está logado✅");
}

function mostrarAlerta_2() {
  alert("Conta criada com sucesso✅");
}


